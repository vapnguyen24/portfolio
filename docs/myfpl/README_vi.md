# MyFPL App - Dự Án Công Nghệ Giáo Dục

## 1. Tổng quan dự án
*   **Tên dự án:** MyFPL App
*   **Lĩnh vực:** EdTech (Công nghệ giáo dục) / Hệ thống quản lý trường học
*   **Nền tảng:** Đa nền tảng (iOS & Android)
*   **Mô tả ngắn:** MyFPL là một hệ sinh thái di động toàn diện được thiết kế cho Tổ chức Giáo dục FPT (FPL). Đây là trung tâm quản lý hành trình học tập cho sinh viên và giúp phụ huynh theo dõi tiến độ của con em mình theo thời gian thực. Bộ giải pháp bao gồm hai ứng dụng chuyên biệt: **MyFPL Student** và **MyFPL Parent**.
*   **Tải về:**
    *   [Google Play Store](https://play.google.com/store/apps/details?id=com.emotionstudent)
    *   [Apple App Store](https://apps.apple.com/vn/app/myfpl/id1604483339)

---

## 2. Mục tiêu
*   **Tập trung hóa dữ liệu học tập:** Cung cấp một điểm truy cập duy nhất cho lịch học, điểm số và thông tin chuyên cần.
*   **Tăng cường tính minh bạch:** Thu hẹp khoảng cách giao tiếp giữa nhà trường và gia đình.
*   **Tự động hóa quy trình:** Đơn giản hóa việc đóng học phí, yêu cầu dịch vụ trực tuyến và điểm danh sử dụng các công nghệ hiện đại như Nhận diện khuôn mặt.
*   **Nâng cao tương tác:** Giữ cho người dùng luôn được cập nhật thông tin qua các thông báo đẩy tức thì về tin tức trường học và cập nhật học tập quan trọng.

---

## 3. Đối tượng người dùng
*   **Sinh viên:** Sinh viên đang theo học tại FPT Education, những người cần theo dõi tiến độ học tập, lịch học và các hoạt động tại trường.
*   **Phụ huynh/Người giám hộ:** Các gia đình muốn cập nhật tình hình chuyên cần, kết quả học tập và các nghĩa vụ tài chính (học phí) của con em mình.
*   **Quản trị viên nhà trường:** (Thông qua Backend) Để cập nhật thông tin, quản lý dữ liệu và giám sát mức độ tương tác tổng thể của toàn trường.

---

## 4. Các tính năng cốt lõi

### 📱 Tính năng cho Sinh viên
*   **Điểm danh thông minh:** Điểm danh bảo mật bằng công nghệ Nhận diện khuôn mặt tích hợp AI.
*   **Dashboard học tập:** Theo dõi thời gian thực điểm số và tiến độ rèn luyện.
*   **Lịch học hằng tuần:** Thời khóa biểu tương tác với thông tin chi tiết về phòng học và giảng viên.
*   **Quản lý học phí:** Xem trạng thái công nợ, lịch sử giao dịch và tích hợp cổng thanh toán trực tuyến.
*   **Dịch vụ trực tuyến:** Yêu cầu cấp giấy chứng nhận, bảng điểm và các dịch vụ sinh viên khác trực tiếp từ ứng dụng.
*   **Tin tức & Thông báo:** Luôn cập nhật các sự kiện mới nhất của trường và thông báo học vụ.

### 🛡️ Tính năng cho Phụ huynh & Quản trị
*   **Giám sát tiến độ:** Phụ huynh có thể xem báo cáo điểm số chi tiết và lịch sử điểm danh của con em mình.
*   **Theo dõi tài chính:** Xem tình trạng học phí và thời hạn thanh toán theo thời gian thực.
*   **Cảnh báo tức thì:** Thông báo đẩy khi sinh viên vắng mặt, có điểm thấp hoặc các thông báo khẩn cấp.
*   **Hỗ trợ đa sinh viên:** Quản lý thông tin của nhiều con chung một tài khoản phụ huynh.

---

## 5. Công nghệ sử dụng
*   **Frontend:** React Native (0.74+), TypeScript, Redux Toolkit, Redux Saga.
*   **UI/UX:** React Navigation, Shopify FlashList, Reanimated 3, SVG, FastImage.
*   **Backend:** AWS (Amplify, SDK), RESTful API (Axios).
*   **AI/ML:** Vision Camera với Face Detection (ML Kit).
*   **Dịch vụ:** Firebase (Messaging & Auth), AppCenter (CodePush cho cập nhật OTA).
*   **Lưu trữ:** MMKV (Lưu trữ cục bộ hiệu suất cao), AsyncStorage.

---

## 6. Kiến trúc hệ thống
*   **Chi tiết kiến trúc:** Hệ thống tuân theo kiến trúc **Client-Server**. Các ứng dụng di động React Native giao tiếp với backend được lưu trữ trên AWS thông qua các RESTful API.
*   **Đồng bộ dữ liệu:** Tối ưu hóa việc lấy dữ liệu sử dụng Redux Saga để quản lý side-effect và MMKV để lưu trữ đệm cục bộ cực nhanh, hỗ trợ xem dữ liệu khi ngoại tuyến.
*   **Hệ thống thông báo:** Firebase Cloud Messaging (FCM) xử lý việc gửi thông báo theo thời gian thực trên cả hai nền tảng.

---

## 7. Bảo mật & Hiệu suất
*   **Xác thực:** Xác thực đa yếu tố bao gồm Đăng nhập Google và các tùy chọn sinh trắc học.
*   **Bảo vệ dữ liệu:** Mã hóa đầu cuối cho các dữ liệu sinh viên nhạy cảm và xử lý thanh toán bảo mật.
*   **Tối ưu hóa hiệu suất:** 
    *   **Sử dụng FlashList** để cuộn mượt mà các danh sách điểm và lịch học dài.
    *   **Cập nhật OTA:** Tích hợp CodePush để sửa lỗi tức thì mà không cần chờ duyệt trên App Store/Play Store.
    *   **Caching hình ảnh:** Chiến lược cache nâng cao để tối thiểu hóa dung lượng dữ liệu và thời gian tải.

---

## 8. Thành tựu
*   **Độ ổn định cao:** Tỷ lệ 99.9% không lỗi được giám sát qua AppCenter.
*   **Mức độ tương tác:** Phục vụ hàng ngàn sinh viên và phụ huynh hoạt động mỗi ngày.
*   **Khả năng mở rộng:** Xử lý thành công lưu lượng truy cập lớn trong giai đoạn công bố điểm và đăng ký môn học.
*   **Hiệu suất:** Đạt mức 60fps cho các hiệu ứng chuyển động và giao diện mượt mà ngay cả trên các thiết bị giá rẻ.

---

## 9. Lộ trình phát triển
*   **Trợ lý học tập AI:** Đưa ra các khuyến nghị học tập cá nhân hóa dựa trên kết quả học tập.
*   **Cộng đồng sinh viên:** Tích hợp các tính năng mạng xã hội cho các câu lạc bộ và hoạt động ngoại khóa.
*   **Phân tích nâng cao:** Phân tích chi tiết xu hướng học tập và cảnh báo dự đoán cho các sinh viên có nguy cơ học yếu.
*   **Hỗ trợ Chế độ tối:** Giao diện tối toàn hệ thống để mang lại sự thoải mái cho người dùng.

---
*© 2024 FPT Education. All rights reserved.*
