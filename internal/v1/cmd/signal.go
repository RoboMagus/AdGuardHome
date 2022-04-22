package cmd

import (
	"os"

	"github.com/AdguardTeam/AdGuardHome/internal/aghos"
	"github.com/AdguardTeam/AdGuardHome/internal/v1/agh"
	"github.com/AdguardTeam/golibs/log"
)

// signalProcessor processes incoming signals and shuts services down.
type signalProcessor struct {
	signal chan os.Signal

	// services are the services that are shut down before application
	// exiting.
	services []agh.Service
}

// awaitSignal waits for signals bound to the signal.
func (sp *signalProcessor) awaitSignal() {
	defer log.OnPanic("awaitSignal")

	for sig := range sp.signal {
		log.Info("sigproc: received signal %q", sig)

		if aghos.IsShutdownSignal(sig) {
			sp.shutdown()
		}
	}
}

// Exit status constants.
const (
	statusSuccess = 0
	statusError   = 1
)

// shutdown gracefully shuts down all services.
func (sp *signalProcessor) shutdown() {
	ctx, cancel := ctxWithDefaultTimeout()
	defer cancel()

	status := statusSuccess

	log.Info("sigproc: shutting down services")
	for i, service := range sp.services {
		err := service.Shutdown(ctx)
		if err != nil {
			log.Error("sigproc: shutting down service at index %d: %s", i, err)
			status = statusError
		}
	}

	log.Info("sigproc: shutting down adguard home")

	os.Exit(status)
}

// newSignalProcessor initializes a new instance of signalProcessor
// and relayed signals to him.
func newSignalProcessor(svcs ...agh.Service) (sp signalProcessor) {
	sp = signalProcessor{
		signal:   make(chan os.Signal, 1),
		services: svcs,
	}

	aghos.NotifyShutdownSignal(sp.signal)

	return sp
}
