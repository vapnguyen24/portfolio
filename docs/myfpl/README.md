# MyFPL App - Education Technology Project

## 1. Project Overview
*   **Project Name:** MyFPL App
*   **Industry/Domain:** EdTech (Education Technology) / Campus Management System
*   **Platform:** Cross-platform (iOS & Android)
*   **Short Description:** MyFPL is a comprehensive mobile ecosystem designed for FPT Education (FPL). It serves as a centralized hub for students to manage their academic journey and for parents to monitor their children's progress in real-time. The suite consists of two dedicated applications: **MyFPL Student** and **MyFPL Parent**.

---

## 2. Objectives
*   **Centralize Academic Data:** Provide a single point of access for schedules, grades, and attendance.
*   **Enhance Transparency:** Bridge the communication gap between the institution and families.
*   **Automate Processes:** Streamline tuition payments, document requests, and attendance tracking using modern technologies like Face Detection.
*   **Improve Engagement:** Keep users informed with instant push notifications for important campus news and academic updates.

---

## 3. Target Users
*   **Students:** Active students at FPT Education who need to track their learning progress, schedules, and campus activities.
*   **Parents/Guardians:** Families who want to stay updated on their children's attendance, academic performance, and financial obligations (tuition).
*   **School Administrators:** (Via Backend) To push updates, manage data, and monitor overall campus engagement.

---

## 4. Core Features

### 📱 User Features (Student)
*   **Smart Attendance:** Secure check-in using AI-powered Face Detection.
*   **Academic Dashboard:** Real-time tracking of grades (Points) and training progress.
*   **Weekly Schedule:** Interactive timetable with venue details and lecturer information.
*   **Tuition Management:** View debt status, transaction history, and integrated payment gateways.
*   **Online Services:** Request certificates, academic transcripts, and other student services directly from the app.
*   **News & Notifications:** Stay updated with the latest campus events and academic announcements.

### 🛡️ Admin & Parent Features
*   **Progress Monitoring:** Parents can view detailed grade reports and attendance history for their children.
*   **Financial Tracking:** Real-time visibility into tuition fees and payment deadlines.
*   **Instant Alerts:** Push notifications for absences, low grades, or emergency announcements.
*   **Multi-Student Support:** Manage multiple children within a single parent account.

---

## 5. Technology Stack
*   **Frontend:** React Native (0.74+), TypeScript, Redux Toolkit, Redux Saga.
*   **UI/UX:** React Navigation, Shopify FlashList, Reanimated 3, SVG, FastImage.
*   **Backend:** AWS (Amplify, SDK), RESTful API (Axios).
*   **AI/ML:** Vision Camera with Face Detection (ML Kit).
*   **Services:** Firebase (Messaging & Auth), AppCenter (CodePush for OTA updates).
*   **Storage:** MMKV (High-performance local storage), AsyncStorage.

---

## 6. System Architecture
*   **Architecture Detail:** The system follows a **Client-Server** architecture. The React Native mobile apps communicate with a robust AWS-hosted backend through RESTful APIs.
*   **Data Synchronization:** Optimized data fetching using Redux Saga for side-effect management and MMKV for ultra-fast local caching to support offline viewing.
*   **Push Engine:** Firebase Cloud Messaging (FCM) handles real-time delivery of notifications across both platforms.

---

## 7. UI & Screenshots
The MyFPL App features a modern, clean, and intuitive interface designed with a focus on usability and accessibility.

![Student Dashboard](./screenshots/screen1.png)
![Attendance Face Detection](./screenshots/screen2.png)
![Academic Schedule](./screenshots/screen3.png)
![Tuition & Payment](./screenshots/screen4.png)

---

## 8. Security & Performance
*   **Authentication:** Multi-factor authentication including Google Sign-In and biometric options.
*   **Data Protection:** End-to-end encryption for sensitive student data and secure payment processing.
*   **Performance Optimization:** 
    *   **FlashList implementation** for smooth scrolling in long grade/schedule lists.
    *   **OTA Updates:** CodePush integration for instant bug fixes without App Store/Play Store delays.
    *   **Image Caching:** Advanced caching strategies to minimize data usage and load times.

---

## 9. Achievements
*   **High Stability:** 99.9% crash-free rate monitored via AppCenter.
*   **User Engagement:** Serving thousands of active students and parents daily.
*   **Scalability:** Successfully handles peak traffic during grade release and course registration periods.
*   **Performance:** Achieved 60fps animations and fluid UI transitions even on budget devices.

---

## 10. Future Roadmap
*   **AI Study Assistant:** Personalized learning recommendations based on academic performance.
*   **Community Hub:** Integrated social features for student clubs and extracurricular activities.
*   **Enhanced Analytics:** Detailed performance trends and predictive alerts for at-risk students.
*   **Dark Mode Support:** Full system-wide dark theme for improved user comfort.

---

*© 2024 FPT Education. All rights reserved.*
