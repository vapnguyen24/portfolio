# ThingIQ - Comprehensive IoT Device Management Solution

## 1. Project Overview
*   **Project Name:** ThingIQ
*   **Industry/Domain:** Industrial Internet of Things (IIoT) & Smart Asset Monitoring
*   **Platform:** Cross-platform (iOS & Android) built with React Native & Expo
*   **Short Description:** ThingIQ is a robust industrial mobile application designed to bridge the gap between complex IoT hardware and real-time operational management. It enables enterprises to monitor, configure, and maintain a vast fleet of devices through a unified, high-performance interface.

---

## 2. Objectives
*   **Operational Transparency:** Provide real-time visibility into device health, environmental conditions, and fuel consumption.
*   **Remote Maintenance:** Reduce field service costs by enabling remote firmware updates (FOTA) and device reboots.
*   **Security & Compliance:** Ensure secure data transmission and role-based access control for industrial environments.
*   **Scalable Management:** Streamline the onboarding and grouping of thousands of devices across multiple organizations and companies.

---

## 3. Target Users
*   **Maintenance Engineers:** Monitor real-time telemetry (speed, temperature, fuel) and perform remote troubleshooting.
*   **Organization Administrators:** Manage user permissions, company-wide settings, and large-scale device configurations.
*   **Operational Managers:** Analyze historical data trends via interactive charts to optimize resource allocation and prevent downtime.

---

## 4. Core Features

### User Features
*   **Live Telemetry Dashboard:** Real-time monitoring of velocity, temperature, and fuel levels with high-performance charts.
*   **Device Control Center:** Remote configuration, reboots, and status tracking (Active, Warning, Critical).
*   **Intelligent Alerting:** Push notifications for abnormal activities like engine idling or threshold breaches.
*   **Clustered Map Integration:** Geographic visualization of device fleets using Google Maps with smart clustering for high-density areas.
*   **Multi-language & Theme:** Support for English/Vietnamese and a fully optimized Dark Mode for varied lighting conditions.

### Admin Features
*   **Organization & Role Management:** Granular RBAC (Role-Based Access Control) to manage companies and users.
*   **Bulk Provisioning:** Feature-rich CSV import for rapid device onboarding into the system.
*   **Firmware Over-the-Air (FOTA):** Managed firmware deployments to ensure all devices run the latest secure software.
*   **Fuel Calibration:** Advanced settings for voltage thresholds, tank capacities, and consumption limits.

---

## 5. Technology Stack
*   **Frontend:** React Native (SDK 0.81), Expo (SDK 54), TypeScript.
*   **Navigation:** Expo Router (File-based routing).
*   **State Management:** TanStack Query (Server state) & Zustand (Global state).
*   **Styling:** Shopify Restyle (Type-safe design system).
*   **Networking:** Axios with SSE (Server-Sent Events) for real-time updates.
*   **Data Handling:** Formik & Yup for complex industrial form management.
*   **Utilities:** Reanimated (Animations), i18next (Localization), FlashList (High-performance lists).

---

## 6. System Architecture
ThingIQ follows a **Feature-based MVVM (Model-View-ViewModel)** architecture, ensuring high maintainability and clear separation of concerns.
*   **App Routing Layer:** Leverages Expo Router for deep-linking and hierarchical navigation.
*   **Library Core:** A custom internal library (`src/library`) providing atomic UI components and networking foundations.
*   **Data Layer:** Specialized services for remote API communication and hardware signaling.
*   **Theming Layer:** A centralized design tokens system for consistent UI/UX across all platforms.

---

## 7. UI & Screenshots
The interface utilizes a custom design system built on **Shopify Restyle**, focusing on industrial reliability and high information density.

![Login & Auth](./screenshots/login.png)
*Figure 1: Secure authentication with OTP verification.*

![Device Dashboard](./screenshots/home.png)
*Figure 2: Comprehensive fleet status and real-time monitoring.*

![Dark Mode Experience](./screenshots/dark.png)
*Figure 3: Optimized dark theme for low-light environment usage.*

---

## 8. Security & Performance
*   **Secure Authentication:** Multi-factor authentication support with OTP and Firebase-backed identity management.
*   **Data Integrity:** HTTPS/TLS 1.3 encryption for all API traffic and secure storage for sensitive credentials via MMKV.
*   **Performance Optimization:** 
    *   **FlashList Integration:** Smooth scrolling for device lists with 10k+ entries.
    *   **Optimistic UI:** Instant feedback on device configuration changes.
    *   **Clustered Maps:** Reduced GPU load when rendering thousands of geographic markers.

---

## 9. Achievements
*   **Enterprise Stability:** Successfully managing fleet versions across diverse Android and iOS hardware profiles.
*   **High Availability:** Reliable real-time alerting system with <1s notification delivery latency.
*   **Multi-tenancy:** Robust support for multi-company hierarchical structures within a single application instance.
*   **Internationalization:** Fully localized for deployment in both Southeast Asian and International markets.

---

## 10. Future Roadmap
*   **Onboarding Enhancements:** Native step-by-step device provisioning wizard.
*   **Enhanced Analytics:** Predictive maintenance reports based on historical sensor data.
*   **Payment Integration:** In-app subscription management for premium fleet monitoring features.
*   **Offline Synchronization:** Enhanced local caching for field operations in low-connectivity areas.

---
*Developed for IES - Industrial Enterprise Solutions.*
