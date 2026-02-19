# Project Casting: High-Performance Cross-Platform Screen Casting

A professional cross-platform solution for seamless, low-latency screen and audio streaming between mobile devices using WebRTC and Wi-Fi Direct technologies.

---

## 1. Project Overview
- **Project Name:** Project Casting
- **Industry/Domain:** Multimedia, Connectivity, Utilities
- **Platform:** Cross-platform (Native Android & Native iOS)
- **Short Description:** Project Casting is a high-performance screen casting suite consisting of a **Sender** (source) and a **Receiver** (sink). It enables users to mirror their mobile screens with synchronized high-fidelity audio to other devices in real-time. By leveraging peer-to-peer (P2P) networking via Wi-Fi Direct, it eliminates the need for an external internet connection or local Wi-Fi router.

## 2. Objectives
- **Main Goals:** To provide a zero-lag screen sharing experience that works without traditional network infrastructure.
- **Value for Users:** Users can share presentations, movies, or gameplay from their phone to a larger Android-based display or another tablet instantly.
- **Value for Business:** Offers a robust foundation for enterprise-level collaboration tools, remote support, and wireless display integrations.

## 3. Target Users
- **Gamers:** Mobile gamers wanting to stream their gameplay to a secondary device for recording or viewing.
- **Edu-Tech Professionals:** Teachers and students sharing content directly between tablets in classrooms without stable Wi-Fi.
- **Corporate Presenters:** Business professionals needing to cast slides or mobile apps during meetings in restricted network environments.

## 4. Core Features
### User Features
- **Real-time Screen Streaming:** 1080p/60fps video transmission with minimal latency.
- **Internal Audio Capture:** Seamless streaming of system audio (Android 10+ and iOS).
- **Wi-Fi Direct P2P Connectivity:** Direct device-to-device connection using Wi-Fi Direct (P2P Group Owner mode).
- **Auto-Discovery:** Automatic discovery of receiver devices within range.
- **Orientation Awareness:** Dynamically adjusts the stream layout based on the sender's device orientation.

### Admin/Developer Features
- **Embedded signaling Server:** A lightweight WebSocket server integrated into the receiver for handshake management.
- **Connection Monitoring:** Real-time stats for bitrate, frame loss, and latency.
- **Encoder Selection:** Support for multiple hardware-accelerated codecs (H.264, VP8, VP9).

## 5. Technology Stack
- **Frontend (Android):** Kotlin, Jetpack Compose, Java (Material Design 3).
- **Frontend (iOS):** Swift, SwiftUI, ReplayKit Broadcast Extension.
- **Communication Protocol:** WebSockets (Signaling), WebRTC (Transmission).
- **Streaming Engine:** Google WebRTC Native SDK.
- **Networking:** Android Wi-Fi Direct API, Apple Network Framework.

## 6. System Architecture
Project Casting utilizes a **Decentralized Peer-to-Peer Architecture**. The Receiver acts as both the **Wi-Fi Direct Group Owner (GO)** and the **Signaling Server**.

1. **Signaling Phase:** The Sender connects to the Receiver's Wi-Fi network and initiates a WebSocket handshake.
2. **Negotiation:** SDP (Session Description Protocol) and ICE candidates are exchanged to establish a direct WebRTC peer connection.
3. **Streaming Phase:** Encoded video and audio frames are sent over SRTP (Secure Real-time Transport Protocol).

![System Architecture Diagram](https://placehold.co/800x400?text=System+Architecture+Diagram)

## 7. UI & Screenshots
The interface is designed with a "Single Button Connectivity" philosophy, focusing on clarity and ease of use. It features a sleek dark mode interface with vibrant accent colors to indicate active streaming states.

### Receiver Interface
![Screenshot 1](./screenshots/screen1.png)
*Figure 1: Receiver dashboard showing connection status and Wi-Fi Direct credentials.*

### Sender Interface
![Screenshot 2](./screenshots/screen2.png)
*Figure 2: Sender application with one-tap "Start Casting" control and device selection.*

## 8. Security & Performance
- **Authentication:** P2P connections are secured via Wi-Fi Direct's WPA2-PSK encryption.
- **Data Protection:** WebRTC streams are encrypted end-to-end using DTLS-SRTP.
- **Performance Optimization:**
    - **Hardware Acceleration:** Full utilization of MediaCodec (Android) and VideoToolbox (iOS) for low-power encoding.
    - **Adaptive Bitrate:** Dynamically scales video quality based on network throughput to prevent choppiness.
    - **Jitter Buffer Management:** Custom audio jitter buffers to maintain perfectly synced sound.

## 9. Achievements
- **Latency:** Achieved sub-150ms end-to-end latency on standard consumer hardware.
- **Stability:** Maintained 60fps streaming for over 4 hours without thermal throttling.
- **User Feedback:** Beta testers highlighted the ease of connection via Wi-Fi Direct vs. traditional Miracast/Chromecast.

## 10. Future Roadmap
- **Planned Features:**
    - **Remote Control (HID):** Allow the receiver to control the sender device (touch/keyboard/mouse).
    - **Multi-Sender Support:** Split-screen view for multiple simultaneous casters.
    - **Recording:** High-quality MP4 recording directly on the receiver side.
- **Scalability:** Expanding support for desktop receivers (Windows/macOS) and web-based viewing.

---
*Developed for IES - Industrial Enterprise Solutions.*

