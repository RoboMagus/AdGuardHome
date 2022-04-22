// Package websvc contains the AdGuard Home web service.
//
// TODO(a.garipov): Add tests.
package websvc

import (
	"context"
	"crypto/tls"
	"fmt"
	"io"
	"net"
	"net/http"
	"time"

	"github.com/AdguardTeam/AdGuardHome/internal/v1/agh"
	"github.com/AdguardTeam/golibs/errors"
	"github.com/AdguardTeam/golibs/log"
	"github.com/AdguardTeam/golibs/netutil"
)

// Config is the AdGuard Home web service configuration structure.
type Config struct {
	// TLS is the optional TLS configuration.
	TLS *tls.Config

	// Addresses are the addresses on which to serve the plain HTTP API.
	Addresses []*netutil.IPPort

	// SecureAddresses are the addresses on which to serve the HTTPS API.
	SecureAddresses []*netutil.IPPort

	// Timeout is the timeout for all server operations.
	Timeout time.Duration
}

// Service is the AdGuard Home web service.  A nil *Service is a valid service
// that does nothing.
type Service struct {
	tls     *tls.Config
	servers []*http.Server
	timeout time.Duration
}

// New returns a new properly initialized *Service.  If c is nil, svc is a nil
// *Service that does nothing.
func New(c *Config) (svc *Service) {
	if c == nil {
		return nil
	}

	svc = &Service{
		tls:     c.TLS,
		timeout: c.Timeout,
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/health-check", svc.handleGetHealthCheck)

	for _, a := range c.Addresses {
		addr := a.String()
		errLog := log.StdLog("websvc: http: "+addr, log.ERROR)
		svc.servers = append(svc.servers, &http.Server{
			Addr:              addr,
			Handler:           mux,
			ErrorLog:          errLog,
			ReadTimeout:       c.Timeout,
			WriteTimeout:      c.Timeout,
			IdleTimeout:       c.Timeout,
			ReadHeaderTimeout: c.Timeout,
		})
	}

	for _, a := range c.SecureAddresses {
		addr := a.String()
		errLog := log.StdLog("websvc: https: "+addr, log.ERROR)
		svc.servers = append(svc.servers, &http.Server{
			Addr:              addr,
			Handler:           mux,
			TLSConfig:         c.TLS,
			ErrorLog:          errLog,
			ReadTimeout:       c.Timeout,
			WriteTimeout:      c.Timeout,
			IdleTimeout:       c.Timeout,
			ReadHeaderTimeout: c.Timeout,
		})
	}

	return svc
}

// Addrs returns all addresses on which this server serves the HTTP API.
func (svc *Service) Addrs() (addrs []string) {
	addrs = make([]string, 0, len(svc.servers))
	for _, srv := range svc.servers {
		addrs = append(addrs, srv.Addr)
	}

	return addrs
}

// handleGetHealthCheck is the handler for the GET /health-check HTTP API.
func (svc *Service) handleGetHealthCheck(w http.ResponseWriter, _ *http.Request) {
	_, _ = io.WriteString(w, "OK")
}

// unit is a convenient alias for struct{}.
type unit = struct{}

// type check
var _ agh.Service = (*Service)(nil)

// Start implements the agh.Service interface for *Service.  svc may be nil.
// After Start exits, all HTTP servers have tried to start, possibly failing and
// writing error messages to the log.
func (svc *Service) Start() (err error) {
	if svc == nil {
		return nil
	}

	srvs := svc.servers
	l := len(srvs)

	done := make(chan unit, l)
	for _, srv := range srvs {
		go startServer(srv, done)
	}

	for i := 0; i < l; i++ {
		<-done
	}

	return nil
}

// startServer is a helper function that starts srv and writes all errors into
// its log.
func startServer(srv *http.Server, done chan<- unit) {
	addr := srv.Addr
	defer log.OnPanic(addr)

	var l net.Listener
	var err error
	if srv.TLSConfig == nil {
		l, err = net.Listen("tcp", addr)
	} else {
		l, err = tls.Listen("tcp", addr, srv.TLSConfig)
	}
	if err != nil {
		srv.ErrorLog.Printf("starting srv %s: binding: %s", addr, err)
	}

	// Update the server's address in case the address had the port zero, which
	// would mean that a random available port was automatically chosen.
	srv.Addr = l.Addr().String()

	log.Info("websvc: starting srv http://%s", srv.Addr)
	done <- unit{}

	err = srv.Serve(l)
	if err != nil && !errors.Is(err, http.ErrServerClosed) {
		srv.ErrorLog.Printf("starting srv %s: %s", addr, err)
	}
}

// Shutdown implements the agh.Service interface for *Service.  svc may be nil.
func (svc *Service) Shutdown(ctx context.Context) (err error) {
	if svc == nil {
		return nil
	}

	var errs []error
	for _, srv := range svc.servers {
		serr := srv.Shutdown(ctx)
		if serr != nil {
			errs = append(errs, fmt.Errorf("shutting down srv %s: %w", srv.Addr, serr))
		}
	}

	if len(errs) > 0 {
		return errors.List("shutting down")
	}

	return nil
}
