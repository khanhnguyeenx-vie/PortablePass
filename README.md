# PortablePass
PortablePass: A blockchain-based digital membership pass enabling cross-application verification, revocation, and non-transferable membership without a shared database or central server.
# PortablePass – Thẻ thành viên số dùng chung giữa các CLB

> **Đề tài NCKH 2026-2027** · Nhóm 3 người · Thời gian thực hiện: 12 tuần

---

## 📖 Giới thiệu / Overview

Sinh viên tham gia nhiều CLB, mỗi CLB có website/sự kiện riêng và mỗi nơi lại bắt đăng ký lại (Google Form, file Excel). **PortablePass** là một "thẻ thành viên số" gắn vào ví của sinh viên. Ban chủ nhiệm CLB cấp thẻ một lần. Sau đó bất kỳ website nào của CLB cũng tự kiểm tra được thẻ, **không cần chung database, không cần gọi API của nhau, không cần một server trung tâm**.

> *Hình dung đơn giản: thẻ giống vé xem phim điện tử có hạn dùng. Rạp nào cũng quét được, nhưng người bán vé có thể hủy vé, và không ai chuyển nhượng vé cho người khác được.*

---

## ⚙️ Vấn đề và Giải pháp Blockchain

So với mô hình truyền thống (Google Login + DB chung), PortablePass giải quyết triệt để vấn đề phụ thuộc vào server trung tâm:

| Tiêu chí | Google Login + DB chung | PortablePass |
| :--- | :--- | :--- |
| **Ai giữ dữ liệu thành viên** | Một bên quản trị DB chung | Smart contract công khai, mỗi CLB tự cấp |
| **Thêm ứng dụng mới** | Phải xin quyền vào DB/API chung | App tự đọc contract |
| **Server trung tâm sập** | Mọi app ngừng hoạt động | App vẫn kiểm tra được (chỉ cần nút đọc chain) |
| **Bên giữ DB sửa dữ liệu** | Có thể | Mọi thay đổi để lại dấu vết trên chain |

*Lưu ý bảo mật & quyền riêng tư:* Thẻ **không chứa tên hay MSSV** để đảm bảo tính riêng tư trên blockchain công khai, và app sử dụng cơ chế ký xác thực nonce để chống giả mạo ví.

---

## 🏗️ Kiến trúc hệ thống

* **Smart Contract:** Viết bằng Solidity (OpenZeppelin, Hardhat/Foundry, testnet Sepolia), hỗ trợ tính năng Soulbound (ERC-5192) chống chuyển nhượng thẻ.
* **Issuer App:** Ứng dụng dành cho Ban chủ nhiệm CLB dùng để phát hành (`Mint`) hoặc thu hồi (`Revoke`) thẻ.
* **Verifier Apps (App A & App B):** Các website độc lập tích hợp kết nối ví, ký nonce và xác thực quyền thành viên trực tiếp từ Smart Contract.
* **Baseline SSO:** Hệ thống đối chứng theo mô hình truyền thống (Node.js/Express + SQLite) dùng để so sánh đánh giá.

---

## 👥 Phân công thành viên

| Thành viên | Hạng mục kỹ thuật chính | Đo đạc & Đánh giá | Báo cáo |
| :--- | :--- | :--- | :--- |
| **Nhóm trưởng** | **Smart contract** (thiết kế, code, test, deploy) | Chi phí gas, độ trễ thu hồi | Chương kiến trúc & contract; Tổng hợp chung |
| **Thành viên** | **Issuer App** & **Verifier App A**, luồng ký nonce | Bảo mật (thử giả danh), độ trễ kiểm tra | Chương ứng dụng web và bảo mật |
| **Thành viên** | **Verifier App B** và **baseline SSO** | Công sức tích hợp, tình huống server sập | Chương đối chứng & đánh giá; Quay video demo |

---

## 📅 Lộ trình tổng quan (12 tuần)

* **Tuần 1 - 2:** Thiết lập môi trường (Git, Node.js, ví, Remix), học Solidity và chạy thử Hello World / deploy contract nhỏ trên testnet.
* **Tuần 3 - 5:** Thiết kế hệ thống, viết Smart Contract bản chuẩn (mint, revoke, expiry, soulbound), dựng khung Issuer App và Baseline SSO.
* **Tuần 6 - 8:** Hoàn thiện các Verifier App, tích hợp luồng ký nonce, chạy thử nghiệm toàn bộ kịch bản demo 6 bước.
* **Tuần 9 - 10:** Đo đạc các chỉ tiêu (gas, độ trễ, bảo mật, công sức tích hợp), tổng hợp bảng so sánh đánh giá.
* **Tuần 11 - 12:** Hoàn thiện báo cáo, làm slide, quay video dự phòng và chuẩn bị bảo vệ đề tài.

---

---
