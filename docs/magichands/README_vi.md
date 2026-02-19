# MagicHands: Nền Tảng Dịch Vụ Theo Yêu Cầu

## 1. Tổng quan dự án
*   **Tên dự án:** MagicHands Platform
*   **Lĩnh vực:** Dịch vụ tại gia theo yêu cầu & Thị trường cung ứng dịch vụ
*   **Nền tảng:** Đa nền tảng (iOS & Android)
*   **Mô tả:** Một hệ sinh thái ứng dụng kép toàn diện kết nối khách hàng với các chuyên gia cung cấp dịch vụ chuyên nghiệp. Nền tảng đơn giản hóa quy trình tìm kiếm, đặt lịch và quản lý các dịch vụ tại gia như dọn dẹp, sửa chữa và bảo trì.

---

## 2. Mục tiêu
*   **Mục tiêu chính:** Thu hẹp khoảng cách giữa những người cung cấp dịch vụ lành nghề và khách hàng thông qua một nền tảng di động liền mạch, đáng tin cậy và bảo mật.
*   **Giá trị cho người dùng:** Tiếp cận với các chuyên gia đã được xác thực, giá cả minh bạch, đặt lịch dễ dàng và chất lượng dịch vụ được đảm bảo.
*   **Giá trị cho doanh nghiệp:** Kết nối khách hàng và người cung cấp dịch vụ hiệu quả, quy trình đặt lịch tự động và hạ tầng có khả năng mở rộng để phát triển thị trường nhanh chóng.

---

## 3. Đối tượng người dùng
*   **Khách hàng:** Những người bận rộn và chủ sở hữu nhà đang tìm kiếm các dịch vụ gia đình đáng tin cậy, coi trọng sự tiện lợi và chất lượng đã được kiểm chứng.
*   **Đối tác (Người cung cấp):** Các chuyên gia độc lập (vd: người dọn dẹp, thợ sửa chữa, kỹ thuật viên) muốn tự động hóa việc tìm kiếm khách hàng và quản lý công việc hiệu quả.

---

## 4. Các tính năng cốt lõi
### Tính năng cho Khách hàng
*   **Tìm kiếm dịch vụ:** Duyệt dịch vụ trực quan với bộ lọc theo danh mục và tìm kiếm thông minh.
*   **Bản đồ tương tác:** Định vị thời gian thực để tìm và theo dõi những người cung cấp dịch vụ gần đó.
*   **Đặt lịch thông minh:** Tích hợp lịch trình nâng cao với các khung giờ đặt chỗ linh hoạt.
*   **Xác thực bảo mật:** Xác thực đa yếu tố bao gồm OTP điện thoại và Đăng nhập mạng xã hội (Apple ID).
*   **Thông báo tức thì:** Cập nhật trạng thái đặt chỗ, thời gian đến và thanh toán theo thời gian thực qua thông báo đẩy.
*   **Đánh giá & Phản hồi:** Hệ thống phản hồi đã xác thực để duy trì tiêu chuẩn dịch vụ cao.

### Tính năng cho Đối tác/Quản trị
*   **Quản lý công việc:** Dashboard động để xem, chấp nhận và quản lý các yêu cầu dịch vụ.
*   **Tối ưu hóa lịch trình:** Tích hợp lịch để quản lý thời gian rảnh và tránh trùng lịch.
*   **Ví điện tử:** Theo dõi thu nhập và xác minh thanh toán bằng hệ thống mã QR tích hợp.
*   **Đăng ký & KYC:** Quy trình tải lên tài liệu đơn giản để xác minh chuyên môn và kiểm tra hồ sơ năng lực.
*   **Nhắn tin trực tiếp:** Kênh liên lạc an toàn để phối hợp trực tiếp với khách hàng.

---

## 5. Công nghệ sử dụng
*   **Frontend:** React Native (0.78 - 0.81), TypeScript, Redux Toolkit, React Navigation.
*   **UI/UX Engine:** React Native Reanimated, Gesture Handler, FlashList (cho danh sách hiệu suất cao).
*   **Backend:** Node.js / Express (RESTful APIs).
*   **Cơ sở dữ liệu:** MySQL (Dữ liệu chính), Redis (Caching), MMKV (Lưu trữ cục bộ trên di động).
*   **Cloud / DevOps:** Firebase (Cloud Messaging), GCP, GitHub Actions (CI/CD).

---

## 6. Kiến trúc hệ thống
Kiến trúc nền tảng tận dụng backend **Modular Monolith** hỗ trợ hai ứng dụng React Native chuyên biệt. Các ứng dụng di động chia sẻ lớp logic cốt lõi cho xác thực và đồng bộ dữ liệu trong khi vẫn duy trì các giao diện người dùng riêng biệt được tối ưu hóa cho mục đích sử dụng khác nhau.

### Luồng hoạt động chính:
1.  **Yêu cầu:** Khách hàng bắt đầu một yêu cầu dịch vụ qua ứng dụng Customer App.
2.  **Kết nối:** Hệ thống truyền phát yêu cầu tới các Đối tác đủ điều kiện dựa trên khoảng cách và đánh giá.
3.  **Hoàn tất:** Đối tác chấp nhận công việc, hoàn thành dịch vụ và xác nhận qua ứng dụng Partner App.

---

## 7. Giao diện & Hình ảnh
Triết lý thiết kế nhấn mạnh vào **sự rõ ràng, tốc độ và tin cậy**. Sử dụng thẩm mỹ "Glassmorphism" hiện đại với các màu sắc nổi bật, giao diện đảm bảo mang lại cảm giác cao cấp trên mọi nền tảng.

![Dashboard Khách hàng](./screenshots/customer_dashboard.png)
![Quản lý đặt lịch của Đối tác](./screenshots/partner_booking.png)
![Luồng thanh toán bảo mật](./screenshots/payment_flow.png)

---

## 8. Bảo mật & Hiệu suất
*   **Xác thực:** Bảo mật mạnh mẽ qua token JWT và quản lý phiên làm việc mã hóa.
*   **Bảo vệ dữ liệu:** Dữ liệu người dùng nhạy cảm được lưu trữ bằng `react-native-encrypted-storage` và `react-native-keychain`.
*   **Tối ưu hóa mạng:** Sử dụng Axios với interceptors để tự động làm mới token và React Query để caching dữ liệu hiệu quả.
*   **Hiển thị:** Tối ưu hóa hiệu suất 60FPS bằng các hiệu ứng native-driver và việc render lại thành phần có chọn lọc.

---

## 9. Thành tựu
*   **Hiệu suất:** Đạt tỷ lệ 99.8% phiên hoạt động không lỗi trên hơn 10.000 người dùng tích cực.
*   **Hiệu quả:** Giảm thời gian đặt lịch trung bình từ 15 phút xuống dưới 2 phút.
*   **Độ tin cậy:** Hoàn thành thành công hơn 50.000 yêu cầu dịch vụ với đánh giá trung bình 4.8/5.0 từ người dùng.

---

## 10. Lộ trình phát triển
*   **Tích hợp AI:** Triển khai các thuật toán kết nối thông minh để dự đoán nhu cầu người dùng và tối ưu hóa tuyến đường cho người cung cấp.
*   **Mở rộng:** Địa phương hóa nền tảng để hỗ trợ đa khu vực bao gồm điều chỉnh tiền tệ và ngôn ngữ.
*   **Tích hợp bảo hiểm:** Ra mắt module bảo hành dịch vụ và bảo hiểm tích hợp để người dùng thêm yên tâm.

---
*Phát triển cho IES - Giải pháp Doanh nghiệp Công nghiệp.*
