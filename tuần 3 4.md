# Thiết kế baseline SSO (Google Login + DB chung)

Người làm: Đỗ Duy Hiếu · Tuần 3 4

## 1. Sơ đồ kiến trúc

https://drive.google.com/open?id=1SMVoVKeyUjrToo-S7s6b_nLIUzPMvUk4&usp=drive_copy

## 2. Thiết kế bảng members

| Cột | Kiểu | Ý nghĩa | Tương ứng bên PortablePass |
|---|---|---|---|
| id | INTEGER | Khóa chính, tự tăng | (không cần) |
| email | TEXT | Email Google của sinh viên | Địa chỉ ví |
| club_id | TEXT | Mã CLB | clubId |
| expiry | INTEGER | Hạn dùng (giây Unix) | expiry |
| revoked | INTEGER | 0 = còn hiệu lực, 1 = đã thu hồi | revoked |


Ghi chú: baseline lưu email (thông tin cá nhân), còn Pass chỉ lưu địa chỉ ví.

## 3. Các API
(điền tiếp)

## 4. Luồng đăng nhập Google
(điền tiếp)

## 5. Kịch bản 6 bước bản baseline
(điền tiếp)

## 6. Kế hoạch đo
(điền tiếp)

## 2. Thiết kế bảng members

| Cột | Kiểu | Ý nghĩa | Tương ứng bên PortablePass |
|---|---|---|---|
| id | INTEGER | Khóa chính, tự tăng | (không cần) |
| email | TEXT | Email Google của sinh viên | Địa chỉ ví |
| club_id | TEXT | Mã CLB | clubId |
| expiry | INTEGER | Hạn dùng (giây Unix) | expiry |
| revoked | INTEGER | 0 = còn hiệu lực, 1 = đã thu hồi | revoked |


Ghi chú: baseline lưu email (thông tin cá nhân), còn Pass chỉ lưu địa chỉ ví.

## 3. Các API
(điền tiếp)

## 4. Luồng đăng nhập Google
(điền tiếp)

## 5. Kịch bản 6 bước bản baseline
(điền tiếp)

## 6. Kế hoạch đo
(điền tiếp)
