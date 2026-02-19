# Finself App: Người Bạn Đồng Hành Quản Lý Tài Chính Cá Nhân

## 1. Tổng quan dự án
- **Tên dự án:** Finself App
- **Lĩnh vực:** Fintech / Tài chính cá nhân / Năng suất
- **Nền tảng:** Đa nền tảng (iOS & Android)
- **Mô tả ngắn:** Finself là một ứng dụng tự quản lý tài chính toàn diện được thiết kế để trao cho cá nhân quyền kiểm soát hoàn toàn sức khỏe tài chính của họ. Ứng dụng kết hợp tính năng theo dõi chi tiêu trực quan với các công cụ lập ngân sách mạnh mẽ và thông tin phân tích tài chính sâu sắc để giúp người dùng đạt được các mục tiêu tài chính của mình.

---

## 2. Mục tiêu
- **Mục tiêu chính:** 
  - Cung cấp một nền tảng "tất cả trong một" liền mạch để quản lý tài chính.
  - Đơn giản hóa quy trình theo dõi thu chi hằng ngày.
  - Cung cấp các thông tin hữu ích thông qua trực quan hóa dữ liệu.
- **Giá trị cho người dùng:** Nâng cao kiến thức tài chính, xây dựng thói quen tiết kiệm tốt hơn và quản lý tài sản một cách nhẹ nhàng.
- **Giá trị cho doanh nghiệp:** Hạ tầng fintech có khả năng mở rộng, có thể tùy chỉnh cho các thị trường và phân khúc người dùng khác nhau.

---

## 3. Đối tượng người dùng
- **Nhân viên văn phòng trẻ:** Mong muốn tối ưu hóa tiền tiết kiệm và theo dõi nhiều nguồn thu nhập.
- **Sinh viên & Người làm tự do:** Cần một phương thức linh hoạt để quản lý ngân sách hạn hẹp và thu nhập biến động.
- **Nhà đầu tư nhạy bén:** Những người muốn có cái nhìn tổng quan về tài sản thanh khoản và các chi phí định kỳ.
- **Nhu cầu chính:** Dễ sử dụng, bảo mật, theo dõi thời gian thực và các phân tích có ý nghĩa.

---

## 4. Các tính năng cốt lõi

### Tính năng người dùng
- **Dashboard Tổng quan:** Trung tâm hiển thị số dư hiện tại, các giao dịch gần đây và tiến độ ngân sách.
- **Theo dõi chi tiêu thông minh:** Tự động phân loại chi tiêu và đính kèm hóa đơn hoặc ghi chú.
- **Quản lý ngân sách:** Thiết lập hạn mức hằng tháng cho các danh mục khác nhau (vd: Ăn uống, Di chuyển, Tiền thuê nhà).
- **Phân tích tương tác:** Trực quan hóa thói quen chi tiêu qua các biểu đồ đường và biểu đồ tròn đẹp mắt.
- **Hỗ trợ đa tiền tệ:** Quản lý giao dịch bằng nhiều loại tiền tệ quốc tế với chuyển đổi theo thời gian thực.
- **Thiết lập mục tiêu:** Xác định các cột mốc tài chính và theo dõi tiến độ thực hiện.
- **Thông báo tùy chỉnh:** Nhắc nhở về các hóa đơn sắp tới hoặc cảnh báo khi chi tiêu vượt ngân sách.

### Tính năng quản trị
- **Phân tích người dùng:** Giám sát sự tăng trưởng người dùng, thời gian phiên hoạt động và các chỉ số tương tác qua dashboard bảo mật.
- **Quản lý nội dung:** Cập nhật các danh mục, tỷ giá tiền tệ và tài liệu hỗ trợ theo thời gian thực.
- **Giám sát bảo mật:** Theo dõi các lần đăng nhập đáng ngờ và quản lý khóa tài khoản.
- **Cấu hình hệ thống:** Cấu hình các cài đặt ứng dụng toàn cầu, các endpoint API và thời gian bảo trì.

---

## 5. Công nghệ sử dụng
- **Frontend:** 
  - **Framework:** Flutter (Dart)
  - **Quản lý trạng thái:** Riverpod
  - **Điều hướng:** Go Router
  - **Styling:** Material Design 3
- **Backend:** Node.js (RESTful API / NestJS)
- **Cơ sở dữ liệu:**
  - **Cloud:** PostgreSQL
  - **Local:** Hive & SharedPreferences (cho bộ nhớ đệm ngoại tuyến)
- **Cloud / DevOps:**
  - **Platform:** Firebase
  - **CI/CD:** GitHub Actions
  - **Logging:** Logger (Triển khai tùy chỉnh)

---

## 6. Kiến trúc hệ thống
- **Mô tả tổng quát:** Dự án tuân theo nguyên tắc **Clean Architecture**, đảm bảo sự phân tách rõ ràng giữa logic nghiệp vụ, quản lý dữ liệu và giao diện người dùng. Ứng dụng sử dụng cấu trúc thư mục dựa trên tính năng để tối đa hóa khả năng mở rộng và bảo trì.
- **Các lớp kiến trúc:**
  - **Presentation:** Các thành phần UI và logic trạng thái (Riverpod).
  - **Domain:** Logic nghiệp vụ và định nghĩa các thực thể (entities).
  - **Data:** Triển khai Repository, API clients (Dio) và lưu trữ cục bộ (Hive).

---

## 7. Giao diện & Hình ảnh
Finself App sở hữu giao diện UI/UX hiện đại, sạch sẽ, được thiết kế theo hướng "Mobile First". Ứng dụng tuân thủ nghiêm ngặt các quy tắc Material Design 3, mang lại trải nghiệm mượt mà với các hiệu ứng micro-animations tinh tế và ngôn ngữ thiết kế đồng nhất.

![Dashboard Tổng quan](./screenshots/dashboard.png)
*Hình 1: Dashboard chính hiển thị tổng quan sức khỏe tài chính.*

![Danh sách giao dịch](./screenshots/transactions.png)
*Hình 2: Chế độ xem chi tiết các giao dịch đã phân loại.*

![Trang phân tích](./screenshots/analytics.png)
*Hình 3: Phân tích chi tiêu và biểu đồ thói quen.*

---

## 8. Bảo mật & Hiệu suất
- **Xác thực:** Đăng nhập bảo mật qua Firebase Auth, hỗ trợ Email/Mật khẩu, Google Sign-In và Apple ID.
- **Bảo vệ dữ liệu:** Mọi dữ liệu nhạy cảm của người dùng đều được mã hóa khi lưu trữ và khi truyền tải (HTTPS/SSL).
- **Kỹ thuật tối ưu hóa:**
  - **Caching hiệu quả:** Hive được sử dụng để truy xuất dữ liệu cục bộ cực nhanh.
  - **Tối ưu hình ảnh:** Sử dụng Cached Network Image để tải tài nguyên mượt mà.
  - **Hiệu quả trạng thái:** Xây dựng lại có chọn lọc các thành phần UI bằng hệ thống phản ứng của Riverpod.
  - **Hiệu ứng Shimmer:** Cải thiện cảm giác về hiệu suất trong quá trình tải dữ liệu.

---

## 9. Thành tựu
- **Độ ổn định:** Đạt tỷ lệ 99.9% không lỗi (crash-free) trong giai đoạn thử nghiệm.
- **Hiệu suất:** Duy trì mức 60 FPS ổn định trên các thiết bị tầm trung.
- **Phản hồi người dùng:** Người dùng thử nghiệm đánh giá cao tính năng "Mục tiêu ngân sách" và việc nhập chi tiêu "Một chạm" trực quan.
- **Chất lượng mã nguồn:** Tuân thủ 100% các quy tắc linting của "Very Good Analysis".

---

## 10. Lộ trình phát triển
- **Cố vấn tài chính AI:** Tích hợp các mô hình ngôn ngữ lớn (LLM) để cung cấp mẹo chi tiêu cá nhân hóa và chiến lược tiết kiệm.
- **Tự động hóa hóa đơn:** Tự động phát hiện và nhắc nhở người dùng về các dịch vụ đăng ký định kỳ.
- **Chia sẻ gia đình:** Lập ngân sách cộng tác cho các hộ gia đình hoặc nhóm du lịch.
- **Tích hợp Crypto:** Theo dõi các tài sản số cùng với tiền tệ truyền thống.

---
*Phát triển cho Finself.*
