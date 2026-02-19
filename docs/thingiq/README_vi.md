# ThingIQ - Giải Pháp Quản Lý Thiết Bị IoT Toàn Diện

## 1. Tổng quan dự án
*   **Tên dự án:** ThingIQ
*   **Lĩnh vực:** Internet vạn vật công nghiệp (IIoT) & Giám sát tài sản thông minh
*   **Nền tảng:** Đa nền tảng (iOS & Android) - Xây dựng với React Native & Expo
*   **Mô tả ngắn:** ThingIQ là một ứng dụng di động công nghiệp mạnh mẽ được thiết kế để thu hẹp khoảng cách giữa phần cứng IoT phức tạp và quản lý vận hành theo thời gian thực. Nó cho phép các doanh nghiệp giám sát, cấu hình và bảo trì một đội ngũ thiết bị khổng lồ thông qua một giao diện thống nhất, hiệu suất cao.

---

## 2. Mục tiêu
*   **Minh bạch hóa vận hành:** Cung cấp khả năng hiển thị thời gian thực về tình trạng thiết bị, điều kiện môi trường và tiêu thụ nhiên liệu.
*   **Bảo trì từ xa:** Giảm chi phí dịch vụ tại hiện trường bằng cách cho phép cập nhật phần mềm điều khiển từ xa (FOTA) và khởi động lại thiết bị.
*   **Bảo mật & Tuân thủ:** Đảm bảo truyền dữ liệu an toàn và kiểm soát truy cập dựa trên vai trò cho các môi trường công nghiệp.
*   **Quản lý có khả năng mở rộng:** Đơn giản hóa quá trình đăng ký và phân nhóm hàng ngàn thiết bị trên nhiều tổ chức và công ty khác nhau.

---

## 3. Đối tượng người dùng
*   **Kỹ sư bảo trì:** Giám sát dữ liệu từ xa (tốc độ, nhiệt độ, nhiên liệu) và thực hiện xử lý sự cố từ xa.
*   **Quản trị viên tổ chức:** Quản lý quyền hạn người dùng, cài đặt toàn hệ thống và cấu hình thiết bị quy mô lớn.
*   **Quản lý vận hành:** Phân tích các xu hướng dữ liệu lịch sử thông qua các biểu đồ tương tác để tối ưu hóa phân bổ nguồn lực và ngăn ngừa thời gian dừng hoạt động.

---

## 4. Các tính năng cốt lõi

### Tính năng người dùng
*   **Dashboard Telemetry Trực tiếp:** Giám sát thời gian thực các thông số vận tốc, nhiệt độ và mức nhiên liệu với các biểu đồ hiệu suất cao.
*   **Trung tâm điều khiển thiết bị:** Cấu hình từ xa, khởi động lại và theo dõi trạng thái (Hoạt động, Cảnh báo, Nguy cấp).
*   **Cảnh báo thông minh:** Thông báo đẩy cho các hoạt động bất thường như chạy không tải động cơ hoặc vượt ngưỡng cho phép.
*   **Tích hợp Bản đồ phân cụm (Clustered Map):** Trực quan hóa vị trí địa lý của đội ngũ thiết bị bằng Google Maps với tính năng phân cụm thông minh cho các khu vực mật độ cao.
*   **Đa ngôn ngữ & Giao diện:** Hỗ trợ tiếng Anh/tiếng Việt và Chế độ tối (Dark Mode) được tối ưu hóa cho các điều kiện ánh sáng khác nhau.

### Tính năng quản trị
*   **Quản lý tổ chức & Vai trò:** Hệ thống RBAC (Role-Based Access Control) chi tiết để quản lý các công ty và người dùng.
*   **Đăng ký thiết bị hàng loạt:** Tính năng nhập CSV mạnh mẽ để nhanh chóng đưa các thiết bị mới vào hệ thống.
*   **Cập nhật phần mềm từ xa (FOTA):** Quản lý triển khai phần mềm điều khiển để đảm bảo tất cả các thiết bị đều chạy phần mềm an toàn mới nhất.
*   **Hiệu chuẩn nhiên liệu:** Cài đặt nâng cao cho các ngưỡng điện áp, dung tích bình chứa và giới hạn tiêu thụ.

---

## 5. Công nghệ sử dụng
*   **Frontend:** React Native (SDK 0.81), Expo (SDK 54), TypeScript.
*   **Điều hướng:** Expo Router (Điều hướng dựa trên file).
*   **Quản lý trạng thái:** TanStack Query (Server state) & Zustand (Global state).
*   **Styling:** Shopify Restyle (Hệ thống thiết kế type-safe).
*   **Kết nối mạng:** Axios với SSE (Server-Sent Events) để cập nhật thời gian thực.
*   **Xử lý dữ liệu:** Formik & Yup cho quản lý các form công nghiệp phức tạp.
*   **Tiện ích:** Reanimated (Hiệu ứng), i18next (Đa ngôn ngữ), FlashList (Danh sách hiệu suất cao).

---

## 6. Kiến trúc hệ thống
ThingIQ tuân theo kiến trúc **Feature-based MVVM (Model-View-ViewModel)**, đảm bảo khả năng bảo trì cao và phân tách rõ ràng các thành phần.
*   **App Routing Layer:** Tận dụng Expo Router để hỗ trợ deep-linking và điều hướng phân cấp.
*   **Library Core:** Một thư viện nội bộ tùy chỉnh (`src/library`) cung cấp các thành phần UI nguyên tử và nền tảng kết nối mạng.
*   **Data Layer:** Các dịch vụ chuyên biệt cho giao tiếp API từ xa và tín hiệu phần cứng.
*   **Theming Layer:** Hệ thống các token thiết kế tập trung để đảm bảo UI/UX nhất quán trên mọi nền tảng.

---

## 7. Giao diện & Hình ảnh
Giao diện sử dụng hệ thống thiết kế tùy chỉnh được xây dựng trên **Shopify Restyle**, tập trung vào độ tin cậy công nghiệp và mật độ thông tin cao.

![Đăng nhập & Xác thực](./screenshots/login.png)
*Hình 1: Xác thực bảo mật với mã OTP.*

![Dashboard thiết bị](./screenshots/home.png)
*Hình 2: Trạng thái đội ngũ thiết bị toàn diện và giám sát thời gian thực.*

![Trải nghiệm Chế độ tối](./screenshots/dark.png)
*Hình 3: Giao diện tối được tối ưu hóa cho việc sử dụng trong môi trường thiếu sáng.*

---

## 8. Bảo mật & Hiệu suất
*   **Xác thực bảo mật:** Hỗ trợ xác thực đa yếu tố với OTP và quản lý định danh qua Firebase.
*   **Toàn vẹn dữ liệu:** Mã hóa HTTPS/TLS 1.3 cho toàn bộ lưu lượng API và lưu trữ an toàn các thông tin nhạy cảm qua MMKV.
*   **Tối ưu hóa hiệu suất:** 
    *   **Tích hợp FlashList:** Cuộn mượt mà các danh sách thiết bị có hơn 10.000 mục.
    *   **Optimistic UI:** Phản hồi tức thì cho các thay đổi cấu hình thiết bị.
    *   **Clustered Maps:** Giảm tải GPU khi hiển thị hàng ngàn điểm đánh dấu địa lý.

---

## 9. Thành tựu
*   **Độ ổn định doanh nghiệp:** Quản lý thành công các phiên bản thiết bị trên nhiều cấu hình phần cứng Android và iOS khác nhau.
*   **Tính khả dụng cao:** Hệ thống cảnh báo thời gian thực đáng tin cậy với độ trễ gửi thông báo < 1s.
*   **Đa đối tượng (Multi-tenancy):** Hỗ trợ mạnh mẽ cho các cấu trúc phân cấp nhiều công ty trong một phiên bản ứng dụng duy nhất.
*   **Quốc tế hóa:** Hoàn toàn được địa phương hóa để triển khai ở cả thị trường Đông Nam Á và Quốc tế.

---

## 10. Lộ trình phát triển
*   **Cải tiến đăng ký thiết bị:** Wizard hướng dẫn từng bước để cài đặt thiết bị mới.
*   **Phân tích nâng cao:** Báo cáo bảo trì dự đoán dựa trên dữ liệu cảm biến lịch sử.
*   **Tích hợp thanh toán:** Quản lý đăng ký thuê bao trong ứng dụng cho các tính năng giám sát nâng cao.
*   **Đồng bộ ngoại tuyến:** Cải thiện bộ đệm cục bộ cho các hoạt động hiện trường ở những khu vực có kết nối kém.

---
*Phát triển cho IES - Giải pháp Doanh nghiệp Công nghiệp.*
