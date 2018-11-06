export default {
    translation: {
        // Header
        Back: 'Quay lại',
        Dashboard: 'Tổng quan',
        Settings: 'Cài đặt',
        Filters: 'Bộ lọc',
        'Query Log': 'Lịch sử truy vấn',
        FAQ: 'Hỏi đáp',
        version: 'phiên bản',
        address: 'địa chỉ',
        ON: 'Đang bật',
        OFF: 'Đang tắt',
        // Footer
        Homepage: 'Trang chủ',
        'Report an issue': 'Báo lỗi',
        // Dashboard
        'Enable protection': 'Bật bảo vệ',
        'Disable protection': 'Tắt bảo vệ',
        'Refresh statistics': 'Làm mới thống kê',
        'DNS Queries': 'Truy vấn DNS',
        'Blocked by': 'Chặn bởi',
        'Blocked malware/phishing': 'Mã độc/lừa đảo đã chặn',
        'Blocked adult websites': 'Website người lớn đã chặn',
        'Top queried domains': 'Tên miền truy vấn nhiều',
        'for the last 24 hours': 'trong 24 giờ qua',
        'No domains found': 'Không có tên miền nào',
        'Requests count': 'Số lần yêu cầu',
        'Top blocked domains': 'Tên miền chặn nhiều',
        'Top clients': 'Client dùng nhiều',
        'No clients found': 'Không có client nào',
        'General statistics': 'Thống kê chung',
        'A number of DNS quieries processed for the last 24 hours': 'Số yêu cầu DNS đã xử lý trong 24 giờ qua',
        'A number of DNS requests blocked by adblock filters and hosts blocklists': 'Số yêu cầu DNS bị chặn bởi bộ lọc quảng cáo và danh sách chặn host',
        'A number of DNS requests blocked by the AdGuard browsing security module': 'Số yêu cầu DNS bị chặn bởi chế độ bảo vệ duyệt web AdGuard',
        'A number of adult websites blocked': 'Số website người lớn đã chặn',
        'Enforced safe search': 'Tìm kiếm an toàn',
        'A number of DNS requests to search engines for which Safe Search was enforced': 'Số yêu cầu DNS tới công cụ tìm kiếm đã chuyển thành tìm kiếm an toàn',
        'Average processing time': 'Thời gian xử lý trung bình',
        'Average time in milliseconds on processing a DNS request': 'Thời gian trung bình cho một yêu cầu DNS tính bằng mili giây',
        // Settings
        'Block domains using filters and hosts files': 'Chặn tên miền sử dụng các bộ lọc và file hosts',
        'You can setup blocking rules in the <a href="#filters">Filters</a> settings.': 'Bạn có thể thiết lập quy tắc chặn tại cài đặt <a href="#filters">Bộ lọc</a>.',
        'Use AdGuard browsing security web service': 'Sử dụng dịch vụ bảo vệ duyệt web AdGuard',
        'AdGuard Home will check if domain is blacklisted by the browsing security web service. It will use privacy-friendly lookup API to perform the check: only a short prefix of the domain name SHA256 hash is sent to the server.': 'AdGuard Home sẽ kiểm tra tên miền với dịch vụ bảo vệ duyệt web. Tính năng sử dụng một API thân thiện với quyền riêng tư: chỉ một phần ngắn tiền tố mã băm SHA256 được gửi đến máy chủ',
        'Use AdGuard parental control web service': 'Sử dụng dịch vụ quản lý của phụ huynh AdGuard',
        'AdGuard Home will check if domain contains adult materials. It uses the same privacy-friendly API as the browsing security web service.': 'AdGuard Home sẽ kiểm tra nếu tên miền chứa từ khoá người lớn. Tính năng sử dụng API thân thiện với quyền riêng tư tương tự với dịch vụ bảo vệ duyệt web',
        'Enforce safe search': 'Bắt buộc tìm kiếm an toàn',
        'AdGuard Home can enforce safe search in the following search engines: Google, Bing, Yandex.': 'AdGuard Home có thể bắt buộc tìm kiếm an toàn với các dịch vụ tìm kiếm: Google, Bing, Yandex.',
        'No servers specified': 'Không có máy chủ nào được liệt kê',
        'No settings': 'Không có cài đặt nào',
        'General settings': 'Cài đặt chung',
        'Upstream DNS servers': 'Máy chủ DNS tìm kiếm',
        'If you keep this field empty, AdGuard Home will use <a href="https://1.1.1.1/" target="_blank">Cloudflare DNS</a> as an upstream. Use tls:// prefix for DNS over TLS servers.': 'Nếu bạn để trống mục này, AdGuard Home sẽ sử dụng <a href="https://1.1.1.1/" target="_blank">Cloudflare DNS</a> để tìm kiếm. Sử dụng tiền tố tls:// cho các máy chủ DNS dựa trên TLS.',
        'Test upstreams': 'Kiểm tra',
        Apply: 'Áp dụng',
        // Settings Toasts
        'Disabled filtering': 'Đã tắt chặn quảng cáo',
        'Enabled filtering': 'Đã bật chặn quảng cáo',
        'Disabled safebrowsing': 'Đã tắt bảo vệ duyệt web',
        'Enabled safebrowsing': 'Đã bật bảo vệ duyệt web',
        'Disabled parental control': 'Đã tắt quản lý của phụ huynh',
        'Enabled parental control': 'Đã bật quản lý của phụ huynh',
        'Disabled safe search': 'Đã tắt tìm kiếm an toàn',
        'Enabled safe search': 'Đã bật tìm kiếm an toàn',
        // Filters
        Enabled: 'Kích hoạt',
        Name: 'Tên',
        'Filter URL': 'URL bộ lọc',
        'Rules count': 'Số quy tắc',
        'Last time updated': 'Cập nhật cuối',
        Actions: 'Thao tác',
        Delete: 'Xoá',
        'Filters and hosts blocklists': 'Danh sách bộ lọc và hosts',
        'AdGuard Home understands basic adblock rules and hosts files syntax.': 'AdGuard home hiểu các quy tắc chặn quảng cáo đơn giản và cú pháp file hosts',
        'No filters added': 'Không có bộ lọc nào được thêm',
        'Add filter': 'Thêm bộ lọc',
        Cancel: 'Huỷ',
        'Enter name': 'Nhập tên',
        'Enter URL': 'Nhập URL',
        'Check updates': 'Kiểm tra cập nhật',
        'New filter subscription': 'Đăng ký bộ lọc mới',
        'Enter a valid URL to a filter subscription or a hosts file.': 'Nhập URL hợp lệ của bộ lọc hoặc file hosts',
        'Custom filtering rules': 'Quy tắc lọc tuỳ chỉnh',
        'Enter one rule on a line. You can use either adblock rules or hosts files syntax.': 'Nhập mỗi quy tắc 1 dòng. Có thể sử dụng quy tắc chặn quảng cáo hoặc cú pháp file host',
        Examples: 'Ví dụ',
        'block access to the example.org domain and all its subdomains': 'Chặn truy cập tới tên miền example.org và tất cả tên miền con',
        'unblock access to the example.org domain and all its subdomains': 'Không chặn truy cập tới tên miền example.org và tất cả tên miền con',
        'AdGuard Home will now return 127.0.0.1 address for the example.org domain (but not its subdomains).': 'AdGuard Home sẽ phản hồi địa chỉ IP 127.0.0.1 cho tên miền example.org (không áp dụng tên miền con)',
        '! Here goes a comment': '! Đây là một chú thích',
        'just a comment': 'Chỉ là một chú thích',
        '# Also a comment': '# Cũng là một chú thích',
        'All filters are already up-to-date': 'Tất cả bộ lọc đã được cập nhật',
        'Updated the upstream DNS servers': 'Đã cập nhật máy chủ DNS tìm kiếm',
        'Specified DNS servers are working correctly': 'Máy chủ DNS có thể sử dụng',
        'Server "{{key}}": could not be used, please check that you\'ve written it correctly': 'Máy chủ "{{key}}": không thể sử dụng, vui lòng kiểm tra bạn đã điền chính xác',
        // Logs
        Unblock: 'Bỏ chặn',
        Block: 'Chặn',
        Time: 'Thời gian',
        'Domain name': 'Tên miền',
        Type: 'Loại',
        Response: 'Phản hồi',
        Empty: 'Rỗng',
        'Show all': 'Hiện tất cả',
        'Show filtered': 'Chỉ hiện đã chặn',
        'No logs found': 'Không có lịch sử truy vấn',
        'Disable log': 'Tắt lịch sử truy vấn',
        'Download log file': 'Tải tập tin lịch sử truy vấn',
        Refresh: 'Làm mới',
        'Enable log': 'Bật lịch sử truy vấn',
        'Last 5000 DNS queries': '5000 truy vấn DNS gần nhất',
        Previous: 'Trang trước',
        Next: 'Trang sau',
        'Loading...': 'Đang tải...',
        Page: 'Trang',
        of: 'của',
        rows: 'hàng',
        'Updated the custom filtering rules': 'Đã cập nhật quy tắc lọc tuỳ chỉnh',
        'Rule removed from the custom filtering rules': 'Quy tắc đã được xoá khỏi quy tắc lọc tuỳ chỉnh',
        'Rule added to the custom filtering rules': 'Quy tắc đã được thêm vào quy tắc lọc tuỳ chỉnh',
        // Popover
        Source: 'Nguồn',
        'Found in the known domains database.': 'Tìm thấy trong cơ sở dữ liệu tên miền',
        Category: 'Thể loại',
        // Popover filter
        Rule: 'Quy tắc',
        Filter: 'Bộ lọc',
    },
};
