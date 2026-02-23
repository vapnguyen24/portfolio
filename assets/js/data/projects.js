window.projects = [
    {
        id: "project1",
        title: { en: "ScreenCast", vi: "Ứng dụng ScreenCast" },
        category: {
            title: { en: "Mobile Developer", vi: "Mobile Developer" },
            className: "bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300"
        },
        summary: {
            en: "A real-time screen casting application that allows users to stream their device screen to other devices seamlessly.",
            vi: "Ứng dụng truyền màn hình thời gian thực, cho phép người dùng chia sẻ màn hình thiết bị sang các thiết bị khác một cách mượt mà."
        },
        desc: {
            en: "A powerful screen casting solution built with modern streaming technologies. The app supports low-latency screen sharing via WebRTC, stable peer-to-peer connections, and multi-device compatibility. Features include audio transmission, remote control support, and adaptive bitrate for smooth performance. The interface is designed for simplicity, fast connection setup, and optimal viewing experience.",
            vi: "Giải pháp truyền màn hình mạnh mẽ được xây dựng bằng các công nghệ streaming hiện đại. Ứng dụng hỗ trợ chia sẻ màn hình độ trễ thấp thông qua WebRTC, kết nối ngang hàng ổn định và tương thích đa thiết bị. Các tính năng bao gồm truyền âm thanh, hỗ trợ điều khiển từ xa và điều chỉnh bitrate để đảm bảo hiệu suất mượt mà. Giao diện được thiết kế đơn giản, kết nối nhanh và tối ưu trải nghiệm người xem."
        },
        img: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Flutter", "Android Native", "Native Modules", "WebRTC", "WebSocket", "Wifi-Direct", "Firebase"],
        images: [
            "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        readmePath: "docs/casting/README.md",
        type: { en: "Company Project", vi: "Dự án công ty" },
        company: { en: "IES - Industrial Embedded Solutions", vi: "IES - Industrial Embedded Solutions" },
        role: [
            { en: "WebRTC: Developed low-latency screen sharing and streaming logic", vi: "WebRTC: Phát triển tính năng chia sẻ màn hình độ trễ thấp" },
            { en: "P2P Connection: Implemented stable peer-to-peer (P2P) networking", vi: "Kết nối P2P: Triển khai kết nối ngang hàng (P2P) ổn định" },
            { en: "Audio Streaming: Built real-time audio transmission features", vi: "Audio Streaming: Xây dựng tính năng truyền âm thanh thời gian thực" },
            { en: "Remote Control: Integrated remote control support and adaptive bitrate", vi: "Remote Control: Tích hợp hỗ trợ điều khiển từ xa và điều chỉnh bitrate" }
        ]
    },
    {
        id: "project2",
        title: { en: "NFT Marketplace", vi: "NFT Marketplace" },
        category: {
            title: { en: "Mobile Developer", vi: "Mobile Developer" },
            className: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
        },
        summary: {
            en: "A decentralized NFT marketplace that enables users to create, trade, and collect digital assets securely.",
            vi: "Nền tảng giao dịch NFT phi tập trung, cho phép người dùng tạo, mua bán và sưu tầm tài sản số một cách an toàn."
        },
        desc: {
            en: "A modern NFT marketplace application built on blockchain technology. The platform supports minting, buying, selling, and auctioning NFTs with smart contract integration. It features secure wallet connectivity, real-time price tracking, and seamless transactions. The user interface is optimized for usability, performance, and community engagement.",
            vi: "Ứng dụng marketplace NFT hiện đại được xây dựng trên nền tảng blockchain. Hệ thống hỗ trợ mint, mua, bán và đấu giá NFT thông qua smart contract. Các tính năng bao gồm kết nối ví an toàn, theo dõi giá theo thời gian thực và giao dịch liền mạch. Giao diện được tối ưu về khả năng sử dụng, hiệu năng và tương tác cộng đồng."
        },

        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Flutter", "Reown Appkit", "Firebase", "Dio", "Riverpod", "MetaMask", "Web3"],
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1543286386-713df548e9cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        readmePath: "docs/nft/README.md",
        type: { en: "Personal Project", vi: "Dự án cá nhân" },
        company: { en: "Personal Portfolio", vi: "Dự án cá nhân" },
        role: [
            { en: "Wallet Integration: Integrated WalletConnect (Reown AppKit) for secure web3 transactions", vi: "Tích hợp Ví: Tích hợp WalletConnect (Reown AppKit) để giao dịch web3 an toàn" },
            { en: "NFT Minting: Developed NFT minting tool with IPFS/metadata support", vi: "Mint NFT: Phát triển công cụ mint NFT với hỗ trợ IPFS/metadata" },
            { en: "Marketplace: Implemented real-time price tracking and collection features", vi: "Thị trường: Triển khai tính năng theo dõi giá và các chức năng bộ sưu tập" },
            { en: "User Dashboard: Built secure dashboard for managing personal digital assets", vi: "Dashboard: Xây dựng dashboard bảo mật để quản lý tài sản số cá nhân" }
        ]
    },
    {
        id: "project3",
        title: { en: "ThingIQ", vi: "Ứng Dụng ThingIQ" },
        category: {
            title: { en: "Mobile Developer", vi: "Mobile Developer" },
            className: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300"
        },
        summary: {
            en: "An intelligent IoT management platform for monitoring, analyzing, and controlling connected devices in real time.",
            vi: "Nền tảng quản lý IoT thông minh, cho phép giám sát, phân tích và điều khiển thiết bị kết nối theo thời gian thực."
        },
        desc: {
            en: "A comprehensive IoT solution built on the ThingIQ platform. The system supports real-time data collection from sensors and tracking devices, advanced analytics, rule-based alerts, and remote device management. It features secure API integration, scalable cloud infrastructure, and an interactive dashboard for monitoring fleet, environment, and operational performance.",
            vi: "Giải pháp IoT toàn diện được xây dựng trên nền tảng ThingIQ. Hệ thống hỗ trợ thu thập dữ liệu thời gian thực từ cảm biến và thiết bị theo dõi, phân tích nâng cao, cảnh báo theo luật và quản lý thiết bị từ xa. Các tính năng bao gồm tích hợp API bảo mật, hạ tầng cloud có khả năng mở rộng và dashboard trực quan để giám sát đội xe, môi trường và hiệu suất vận hành."
        },
        img: "./assets/images/thingiq/img1.png",
        tags: ["React Native", "Expo", "ECharts", "MapSDK", "SocketIO", "SSE", "Firebase", "Zustand"],
        images: [
            "./assets/images/thingiq/img1.png",
            "./assets/images/thingiq/img2.png",
            "./assets/images/thingiq/img3.png"
        ],
        readmePath: "docs/thingiq/README.md",
        type: { en: "Company Project", vi: "Dự án công ty" },
        company: { en: "IES - Industrial Embedded Solutions", vi: "IES - Industrial Embedded Solutions" },
        role: [
            { en: "Data Dashboard: Developed real-time monitoring dashboard using ECharts", vi: "Dashboard Dữ liệu: Phát triển dashboard giám sát thời gian thực với ECharts" },
            { en: "Device Tracking: Integrated MapSDK for live device tracking and geofencing", vi: "Theo dõi Thiết bị: Tích hợp MapSDK để theo dõi trực tiếp và vùng an toàn" },
            { en: "Real-time Updates: Implemented SocketIO/SSE for instant sensor data", vi: "Cập nhật Tức thì: Triển khai SocketIO/SSE để cập nhật dữ liệu cảm biến" },
            { en: "Management: Built rule-based alert system and remote device management", vi: "Quản lý: Xây dựng hệ thống cảnh báo theo luật và quản lý thiết bị từ xa" }
        ]
    },
    {
        id: "project4",
        title: { en: "Finself", vi: "Ứng Dụng Finself" },
        category: {
            title: { en: "Mobile Developer", vi: "Mobile Developer" },
            className: "bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300"
        },
        summary: {
            en: "A personal finance management application that helps users track expenses, manage budgets, and build healthy financial habits.",
            vi: "Ứng dụng quản lý tài chính cá nhân giúp người dùng theo dõi chi tiêu, quản lý ngân sách và xây dựng thói quen tài chính lành mạnh."
        },
        desc: {
            en: "A smart personal finance solution designed to simplify money management. The app allows users to record daily income and expenses, categorize transactions, set saving goals, and analyze spending habits through visual reports. It features cloud synchronization, secure data storage, and an intuitive interface optimized for long-term financial planning and personal growth.",
            vi: "Giải pháp quản lý tài chính cá nhân thông minh được thiết kế để đơn giản hóa việc quản lý tiền bạc. Ứng dụng cho phép người dùng ghi lại thu chi hằng ngày, phân loại giao dịch, đặt mục tiêu tiết kiệm và phân tích thói quen chi tiêu thông qua báo cáo trực quan. Hệ thống tích hợp đồng bộ dữ liệu trên cloud, lưu trữ an toàn và giao diện thân thiện, tối ưu cho việc lập kế hoạch tài chính lâu dài và phát triển cá nhân."
        },
        img: "./assets/images/finself/img1.png",
        tags: ["Flutter", "Dio", "Riverpod", "Notification", "SSO Authentication", "WidgetKit"],
        images: [
            "./assets/images/finself/img1.png",
            "./assets/images/finself/img2.png"
        ],
        readmePath: "docs/finself/README.md",
        type: { en: "Company Project", vi: "Dự án công ty" },
        company: { en: "Finself", vi: "Finself" },
        role: [
            { en: "Expense Tracking: Implemented smart expense tracking and auto-categorization", vi: "Theo dõi Chi tiêu: Triển khai tính năng theo dõi thông minh và tự động phân loại" },
            { en: "Budget Management: Developed custom budget plans and financial milestones", vi: "Quản lý Ngân sách: Phát triển kế hoạch ngân sách và các cột mốc tài chính" },
            { en: "Data Analytics: Built interactive analytics with high-end visualization charts", vi: "Phân tích Dữ liệu: Xây dựng hệ thống phân tích với biểu đồ trực quan" },
            { en: "Multi-currency: Integrated multi-currency support with real-time conversion", vi: "Đa Tiền tệ: Tích hợp hỗ trợ đa tiền tệ với chuyển đổi thời gian thực" }
        ]
    },
    {
        id: "project5",
        title: { en: "MagicHands", vi: "Ứng Dụng MagicHands" },
        category: {
            title: { en: "Mobile Developer", vi: "Mobile Developer" },
            className: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
        },
        summary: {
            en: "A smart home service booking platform that connects users with professional domestic workers quickly and conveniently.",
            vi: "Nền tảng đặt dịch vụ gia đình thông minh, kết nối người dùng với cộng tác viên giúp việc chuyên nghiệp một cách nhanh chóng và tiện lợi."
        },
        desc: {
            en: "A comprehensive on-demand home service application designed to simplify daily life. The platform allows users to book cleaning, maintenance, and household services in real time. It features secure payments, real-time job tracking, partner management, and an intuitive admin dashboard. The system focuses on service quality, operational efficiency, and seamless user experience.",
            vi: "Ứng dụng dịch vụ gia đình theo yêu cầu được thiết kế nhằm đơn giản hóa cuộc sống hằng ngày. Nền tảng cho phép người dùng đặt lịch dọn dẹp, bảo trì và các dịch vụ gia đình theo thời gian thực. Hệ thống tích hợp thanh toán an toàn, theo dõi công việc trực tuyến, quản lý cộng tác viên và dashboard quản trị trực quan. Ứng dụng tập trung vào chất lượng dịch vụ, hiệu quả vận hành và trải nghiệm người dùng mượt mà."
        },
        img: "./assets/images/magichands/img1.png",
        tags: ["React Native", "Expo", "Redux", "Axios", "Keychain", "Firebase", "Rollbar", "WidgetKit"],
        images: [
            "./assets/images/magichands/img1.png",
            "./assets/images/magichands/img2.png",
            "./assets/images/magichands/img3.png"
        ],
        readmePath: "docs/magichands/README.md",
        type: { en: "Company Project", vi: "Dự án công ty" },
        company: { en: "IES - Industrial Embedded Solutions", vi: "IES - Industrial Embedded Solutions" },
        role: [
            { en: "App Ecosystem: Built dual-app ecosystem for Customers and Partners", vi: "Hệ sinh thái: Xây dựng hệ thống ứng dụng kép cho Khách hàng và Đối tác" },
            { en: "Service Discovery: Implemented service discovery with map-based live tracking", vi: "Tìm kiếm Dịch vụ: Triển khai tìm kiếm dịch vụ với theo dõi trên bản đồ" },
            { en: "Scheduling: Developed smart scheduling engine and job management workflows", vi: "Đặt lịch: Phát triển bộ máy đặt lịch thông minh và quy trình quản lý" },
            { en: "Payments: Integrated digital wallet and QR code payment system", vi: "Thanh toán: Tích hợp ví điện tử và hệ thống thanh toán mã QR" }
        ]
    },
    {
        id: "project6",
        title: { en: "MyFPL", vi: "Ứng Dụng MyFPL" },
        category: {
            title: { en: "Mobile Developer", vi: "Mobile Developer" },
            className: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300"
        },
        summary: {
            en: "A student service mobile application that helps users access academic schedules, grades, attendance, and school notifications quickly and conveniently.",
            vi: "Ứng dụng dịch vụ dành cho sinh viên giúp người dùng truy cập lịch học, điểm số, điểm danh và thông báo học tập một cách nhanh chóng và tiện lợi."
        },
        desc: {
            en: "A comprehensive student support application designed to streamline academic management. The platform allows students to view and track class schedules, check grades, monitor attendance, receive announcements from school, and manage academic activities easily. It features secure login, intuitive navigation, personalized dashboards, and real-time updates. The system focuses on delivering accurate student information, improving educational experience, and simplifying everyday academic tasks.",
            vi: "Một ứng dụng hỗ trợ sinh viên toàn diện được thiết kế nhằm đơn giản hóa việc quản lý học tập. Nền tảng cho phép sinh viên xem và theo dõi lịch học, kiểm tra điểm số, giám sát điểm danh, nhận thông báo từ nhà trường và quản lý các hoạt động học tập dễ dàng. Ứng dụng tích hợp đăng nhập bảo mật, điều hướng trực quan, dashboard cá nhân hóa và cập nhật theo thời gian thực. Hệ thống tập trung vào cung cấp thông tin chính xác cho sinh viên, nâng cao trải nghiệm học tập và đơn giản hóa các công việc học tập hàng ngày."
        },
        img: "./assets/images/myfpl/img1.png",
        tags: ["React Native", "JavaScript", "Redux Saga", "Axios", "SSO Authentication", "Firebase"],
        images: [
            "./assets/images/myfpl/img1.png",
            "./assets/images/myfpl/img2.png",
            "./assets/images/myfpl/img3.png"
        ],
        readmePath: "docs/myfpl/README.md",
        type: { en: "Company Project", vi: "Dự án công ty" },
        company: { en: "FPT Education", vi: "FPT Education" },
        role: [
            { en: "Face Detection: Developed smart attendance with AI-powered algorithms", vi: "Nhận diện khuôn mặt: Phát triển tính năng điểm danh thông minh qua AI" },
            { en: "Academic Dashboard: Built tracking system for grades and training progress", vi: "Bảng học tập: Xây dựng hệ thống theo dõi điểm và tiến độ rèn luyện" },
            { en: "Tuition Management: Implemented payment integration and fee tracking", vi: "Quản lý học phí: Triển khai tích hợp thanh toán và theo dõi học phí" },
            { en: "News & Notifications: Integrated real-time campus updates", vi: "Tin tức & Thông báo: Tích hợp cập nhật trường học theo thời gian thực" }
        ]
    },
];
