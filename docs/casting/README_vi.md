# Project Casting: Truyền Màn Hình Đa Nền Tảng Hiệu Suất Cao

Giải pháp đa nền tảng chuyên nghiệp để truyền hình ảnh và âm thanh với độ trễ thấp giữa các thiết bị di động bằng công nghệ WebRTC và Wi-Fi Direct.

---

## 1. Tổng quan dự án
- **Tên dự án:** Project Casting
- **Lĩnh vực:** Đa phương tiện, Kết nối, Tiện ích
- **Nền tảng:** Đa nền tảng (Native Android & Native iOS)
- **Mô tả ngắn:** Project Casting là bộ giải pháp truyền màn hình hiệu suất cao bao gồm **Sender** (nguồn) và **Receiver** (đích). Nó cho phép người dùng phản chiếu màn hình di động với âm thanh chất lượng cao được đồng bộ hóa tới các thiết bị khác theo thời gian thực. Bằng cách tận dụng mạng ngang hàng (P2P) qua Wi-Fi Direct, ứng dụng loại bỏ nhu cầu kết nối internet bên ngoài hoặc bộ định tuyến Wi-Fi cục bộ.

## 2. Mục tiêu
- **Mục tiêu chính:** Cung cấp trải nghiệm chia sẻ màn hình không độ trễ, hoạt động không cần hạ tầng mạng truyền thống.
- **Giá trị cho người dùng:** Người dùng có thể chia sẻ bài thuyết trình, phim hoặc trò chơi từ điện thoại sang màn hình Android lớn hơn hoặc máy tính bảng khác ngay lập tức.
- **Giá trị cho doanh nghiệp:** Cung cấp nền tảng vững chắc cho các công cụ cộng tác doanh nghiệp, hỗ trợ từ xa và tích hợp hiển thị không dây.

## 3. Đối tượng người dùng
- **Game thủ:** Người chơi game di động muốn truyền trực tiếp quá trình chơi của họ sang thiết bị thứ hai để ghi hình hoặc xem.
- **Chuyên gia giáo dục:** Giáo viên và học sinh chia sẻ nội dung trực tiếp giữa các máy tính bảng trong lớp học mà không cần Wi-Fi ổn định.
- **Người thuyết trình doanh nghiệp:** Các chuyên gia cần trình chiếu slide hoặc ứng dụng di động trong các cuộc họp ở môi trường mạng bị hạn chế.

## 4. Các tính năng cốt lõi
### Tính năng người dùng
- **Truyền màn hình thời gian thực:** Truyền video 1080p/60fps với độ trễ cực thấp.
- **Thu âm thanh nội bộ:** Truyền phát liền mạch âm thanh hệ thống (Android 10+ và iOS).
- **Kết nối Wi-Fi Direct P2P:** Kết nối trực tiếp giữa các thiết bị bằng Wi-Fi Direct (chế độ P2P Group Owner).
- **Tự động phát hiện:** Tự động tìm kiếm các thiết bị nhận trong phạm vi.
- **Nhận diện hướng màn hình:** Tự động điều chỉnh bố cục luồng truyền dựa trên hướng thiết bị của người gửi.

### Tính năng cho Admin/Developer
- **Server báo hiệu tích hợp:** Một WebSocket server nhẹ được tích hợp vào bên nhận để quản lý quá trình bắt tay (handshake).
- **Giám sát kết nối:** Thống kê thời gian thực về bitrate, mất khung hình và độ trễ.
- **Lựa chọn bộ mã hóa:** Hỗ trợ nhiều codec tăng tốc phần cứng (H.264, VP8, VP9).

## 5. Công nghệ sử dụng
- **Frontend (Android):** Kotlin, Jetpack Compose, Java (Material Design 3).
- **Frontend (iOS):** Swift, SwiftUI, ReplayKit Broadcast Extension.
- **Giao thức giao tiếp:** WebSockets (Báo hiệu), WebRTC (Truyền tải).
- **Công cụ streaming:** Google WebRTC Native SDK.
- **Mạng:** Android Wi-Fi Direct API, Apple Network Framework.

## 6. Kiến trúc hệ thống
Project Casting sử dụng **Kiến trúc mạng ngang hàng phi tập trung (Decentralized Peer-to-Peer)**. Thiết bị nhận (Receiver) đóng vai trò vừa là **Wi-Fi Direct Group Owner (GO)** vừa là **Signaling Server**.

1. **Giai đoạn báo hiệu:** Thiết bị gửi kết nối với mạng Wi-Fi của thiết bị nhận và bắt đầu bắt tay qua WebSocket.
2. **Thương lượng:** Trao đổi SDP (Session Description Protocol) và các ứng viên ICE để thiết lập kết nối ngang hàng WebRTC trực tiếp.
3. **Giai đoạn truyền phát:** Các khung hình video và âm thanh đã mã hóa được gửi qua SRTP (Secure Real-time Transport Protocol).

![Sơ đồ kiến trúc hệ thống](https://placehold.co/800x400?text=System+Architecture+Diagram)

## 7. Giao diện & Hình ảnh
Giao diện được thiết kế theo triết lý "Kết nối một chạm", tập trung vào sự rõ ràng và dễ sử dụng. Ứng dụng có giao diện chế độ tối mượt mà với các màu sắc tạo điểm nhấn để chỉ báo trạng thái truyền phát đang hoạt động.

### Giao diện bên nhận (Receiver)
![Ảnh chụp màn hình 1](./screenshots/screen1.png)
*Hình 1: Dashboard của bên nhận hiển thị trạng thái kết nối và thông tin Wi-Fi Direct.*

### Giao diện bên gửi (Sender)
![Ảnh chụp màn hình 2](./screenshots/screen2.png)
*Hình 2: Ứng dụng bên gửi với nút điều khiển "Bắt đầu truyền" một chạm và chọn thiết bị.*

## 8. Bảo mật & Hiệu suất
- **Xác thực:** Kết nối P2P được bảo mật thông qua mã hóa WPA2-PSK của Wi-Fi Direct.
- **Bảo vệ dữ liệu:** Các luồng WebRTC được mã hóa đầu cuối bằng DTLS-SRTP.
- **Tối ưu hóa hiệu suất:**
    - **Tăng tốc phần cứng:** Tận dụng tối đa MediaCodec (Android) và VideoToolbox (iOS) để mã hóa tiết kiệm năng lượng.
    - **Bitrate thích ứng:** Tự động điều chỉnh chất lượng video dựa trên băng thông mạng để tránh giật lag.
    - **Quản lý Jitter Buffer:** Các bộ đệm khử nhiễu âm thanh tùy chỉnh để duy trì âm thanh được đồng bộ hoàn hảo.

## 9. Thành tựu
- **Độ trễ:** Đạt được độ trễ dưới 150ms trên các thiết bị tiêu dùng thông thường.
- **Độ ổn định:** Duy trì truyền phát 60fps trong hơn 4 giờ liên tục mà không bị quá nhiệt.
- **Phản hồi người dùng:** Người dùng thử nghiệm đánh giá cao sự dễ dàng kết nối qua Wi-Fi Direct so với Miracast/Chromecast truyền thống.

## 10. Lộ trình phát triển
- **Tính năng dự kiến:**
    - **Điều khiển từ xa (HID):** Cho phép bên nhận điều khiển thiết bị gửi (chạm/bàn phím/chuột).
    - **Hỗ trợ nhiều nguồn gửi:** Xem chia màn hình cho nhiều thiết bị truyền cùng lúc.
    - **Ghi hình:** Ghi hình chất lượng cao định dạng MP4 trực tiếp trên bên nhận.
- **Khả năng mở rộng:** Mở rộng hỗ trợ cho các thiết bị nhận máy tính để bàn (Windows/macOS) và xem qua web.

---
*Được phát triển cho IES - Giải pháp Doanh nghiệp Công nghiệp.*
