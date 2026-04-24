# 🔗 MetaChain NFT Marketplace

Ứng dụng di động chuyên nghiệp, hiệu suất cao được thiết kế để khám phá, mint và giao dịch Token không thể thay thế (NFT) trên blockchain một cách liền mạch.

---

## 1. Tổng quan dự án
- **Tên dự án:** MetaChain NFT Marketplace
- **Lĩnh vực:** Blockchain, Fintech, Tài sản số
- **Nền tảng:** Đa nền tảng (Android, iOS) - Phát triển bởi Flutter
- **Mô tả ngắn:** MetaChain là hệ sinh thái NFT thế hệ mới nhằm thu hẹp khoảng cách giữa những người sáng tạo kỹ thuật số và các nhà sưu tầm. Nó cung cấp một giao diện bảo mật, trực quan và cực kỳ nhanh chóng để tương tác với các tài sản blockchain, được xây dựng tập trung vào trải nghiệm người dùng cao cấp và kiến trúc vững chắc.

## 2. Mục tiêu
- **Phổ cập hóa tiếp cận NFT:** Phá bỏ các rào cản kỹ thuật cho những người dùng không am hiểu về tiền điện tử tham gia vào không gian NFT.
- **Trao quyền cho người sáng tạo:** Cung cấp cho các nghệ sĩ những công cụ mạnh mẽ để mint, quản lý và kiếm tiền từ các tác phẩm kỹ thuật số của họ.
- **Hệ sinh thái an toàn:** Triển khai các giao thức bảo mật tiêu chuẩn ngành cho việc kết nối ví và ký giao dịch.
- **Hiệu suất cao:** Mang lại trải nghiệm mượt mà, phản hồi nhanh tương đương với các tiêu chuẩn thương mại điện tử truyền thống khi tương tác với các mạng phi tập trung.

## 3. Đối tượng người dùng
- **Nghệ sĩ & Người sáng tạo kỹ thuật số:** Tìm kiếm một nền tảng chuyên nghiệp để trưng bày và bán các tác phẩm nghệ thuật kỹ thuật số của họ.
- **Nhà sưu tầm & Nhà đầu tư:** Tìm kiếm một thị trường đáng tin cậy để khám phá các tài sản hiếm và quản lý danh mục đầu tư.
- **Người đam mê Blockchain:** Những người dùng coi trọng tính phi tập trung và quyền sở hữu trực tiếp các sản phẩm kỹ thuật số.
- **Doanh nghiệp:** Các tổ chức muốn ra mắt bộ sưu tập NFT mang thương hiệu riêng với sự tập trung vào tính ổn định và khả năng mở rộng.

## 4. Các tính năng cốt lõi

### 👤 Tính năng người dùng
- **Hỗ trợ đa ví:** Tích hợp liền mạch với WalletConnect (Reown AppKit) để ký giao dịch an toàn.
- **Công cụ Mint NFT:** Tạo các tài sản kỹ thuật số duy nhất trực tiếp từ ứng dụng di động với hỗ trợ siêu dữ liệu (metadata).
- **Thị trường nâng cao:** Khám phá NFT thông qua duyệt theo danh mục, tìm kiếm trực tiếp và các bộ sưu tập được lọc.
- **Giao dịch & Niêm yết:** Niêm yết tài sản để bán, đặt thầu và hoàn tất mua hàng tức thì với cập nhật giá theo thời gian thực.
- **Quản lý bộ sưu tập:** Tạo và tổ chức các NFT thành các bộ sưu tập mang thương hiệu với metadata có thể tùy chỉnh.
- **Hồ sơ cá nhân hóa:** Theo dõi các tài sản sở hữu, lịch sử giao dịch và các mục yêu thích trong một dashboard được thiết kế đẹp mắt.

### 🛡️ Tính năng quản trị
- **Phân tích thời gian thực:** Theo dõi sức khỏe thị trường, khối lượng giao dịch và sự tăng trưởng người dùng thông qua dashboard toàn diện.
- **Kiểm duyệt bộ sưu tập:** Xem xét và phê duyệt các bộ sưu tập do cộng đồng tạo ra để đảm bảo chất lượng thị trường.
- **Giám sát hệ thống:** Theo dõi hiệu năng API và sức khỏe của các node blockchain trên các môi trường khác nhau (Dev/Staging/Prod).

## 5. Công nghệ sử dụng

### 📱 Frontend
- **Framework:** Flutter (Dart)
- **Quản lý trạng thái:** Riverpod & Provider
- **Điều hướng:** GoRouter
- **Tích hợp Web3:** Reown AppKit (WalletConnect v2)
- **UI & Animations:** Lottie, Shimmer, Flutter Staggered Grid

### ⚙️ Backend
- **Engine:** Node.js (NestJS framework)
- **API:** RESTful API với kiến trúc dịch vụ dạng module
- **Xác thực:** JWT & Xác minh Nonce dựa trên ví

### 🗄️ Cơ sở dữ liệu
- **Database chính:** PostgreSQL (cho metadata, hồ sơ người dùng và dữ liệu off-chain)
- **Caching:** Redis để truy xuất dữ liệu thị trường tốc độ cao

### ☁️ Cloud / DevOps
- **Hosting:** Azure Cloud Services
- **CI/CD:** GitHub Actions để tự động hóa kiểm thử và triển khai
- **Lưu trữ:** Azure Blob Storage cho các tài sản truyền thông

## 6. Kiến trúc hệ thống
MetaChain được xây dựng bằng nguyên tắc **Clean Architecture**, đảm bảo sự phân tách rõ ràng giữa các thành phần, giúp hệ thống có khả năng kiểm thử và mở rộng cao.

- **Presentation Layer:** Các thành phần UI phản ứng được xây dựng với Flutter, tách biệt hoàn toàn với logic nghiệp vụ.
- **Domain Layer:** Chứa logic nghiệp vụ thuần túy, các thực thể (entities) và các giao diện repository.
- **Data Layer:** Xử lý giao tiếp API (Dio), lưu trữ cục bộ (Shared Preferences) và tương tác blockchain.
- **Modular DI:** Mỗi tính năng (Auth, NFT, Marketplace) được đóng gói trong module tiêm phụ thuộc (dependency injection) riêng để bảo trì tốt hơn.

## 7. Bảo mật & Hiệu suất

### 🔐 Bảo mật
- **Xác thực phi đối xứng:** Đăng nhập dựa trên ví bằng cách ký số (luồng Nonce/Verify).
- **Lưu trữ an toàn:** Các token và khóa nhạy cảm được xử lý bằng kho lưu trữ cục bộ mã hóa.
- **Toàn vẹn dữ liệu:** Mã hóa HTTPS/TLS đầu cuối cho mọi giao tiếp API.

### 🚀 Hiệu suất
- **Tối ưu hóa hiển thị:** Danh sách lazy-loading và lưới so le để cuộn mượt mà qua các danh mục lớn.
- **Caching thông minh:** Caching nhiều lớp cho hình ảnh và metadata của NFT để giảm thiểu băng thông mạng.
- **Phản hồi mượt mà:** Hiệu ứng Shimmer và chuyển động Lottie cung cấp phản hồi hình ảnh tức thì trong các thao tác bất đồng bộ.

## 8. Thành tựu
- **Hiệu suất:** Đạt thời gian phản hồi API < 200ms cho các truy vấn thị trường.
- **Độ ổn định:** Duy trì thời gian hoạt động 99.99% của API sản xuất trên Azure.
- **UI/UX:** Nhận được phản hồi tích cực về luồng kết nối ví liền mạch.
- **Kiểm thử:** Độ bao phủ mã nguồn (code coverage) trên 85% cho các logic nghiệp vụ quan trọng trong domain layer.

## 9. Lộ trình phát triển
- **Mở rộng đa chuỗi:** Hỗ trợ các mạng Polygon, Solana và BSC.
- **Nhắn tin P2P:** Hệ thống chat tích hợp cho người mua và người bán thương lượng.
- **Tính năng mạng xã hội:** Bảng tin cộng đồng, theo dõi và hoạt động của các nghệ sĩ.
- **Hỗ trợ IPFS Native:** Lưu trữ phi tập trung hoàn toàn cho media NFT trực tiếp từ phía người dùng.

---

Được xây dựng với ❤️ bởi MetaChain Team.
