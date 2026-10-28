# Kết quả test baseline SSO (Tuần 4)

Người làm: Đỗ Duy Hiếu · Ngày test: ____/____/2026

Cách điền: chạy từng test theo thứ tự, ghi kết quả thấy trên terminal vào cột **Thực tế**, rồi đánh dấu **Đạt** (✅) hoặc **Không đạt** (❌). Ảnh chụp màn hình đặt trong thư mục `anh-test/` cùng cấp với file này.

| # | Việc làm | API | Mong đợi | Thực tế | Đạt? | Ảnh |
|---|---|---|---|---|---|---|
| 1 | Cấp thẻ cho lan@gmail.com, english-club, hạn 4102444800 | `POST /admin/mint` | `ok: True` | | | test1.png |
| 2 | Kiểm tra Lan, english-club | `GET /check` | `valid: True` | | | test2.png |
| 3 | Kiểm tra Lan, drama-club (chưa tham gia) | `GET /check` | `valid: False`, `no_card` | | | test3.png |
| 4 | Cấp thẻ cho nam@gmail.com, english-club, hạn 1 (đã qua) | `POST /admin/mint` | `ok: True` | | | test4.png |
| 5 | Kiểm tra Nam, english-club | `GET /check` | `valid: False`, `expired` | | | test5.png |
| 6 | Thu hồi thẻ của Lan, english-club | `POST /admin/revoke` | `ok: True` | | | test6.png |
| 7 | Kiểm tra Lan sau khi thu hồi | `GET /check` | `valid: False`, `revoked` | | | test7.png |
| 8 | Cấp lại thẻ cho Lan rồi kiểm tra | `POST /admin/mint`, `GET /check` | `ok: True`, rồi `valid: True` | | | test8.png |
| 9 | Thu hồi người chưa từng có thẻ | `POST /admin/revoke` | Lỗi 404 | | | test9.png |
| 10 | Cấp thẻ thiếu `email` | `POST /admin/mint` | Lỗi 400 | | | test10.png |

## Kiểm tra database sau khi test xong

Mở `baseline.db` (SQLite Viewer), bảng `members`, bấm làm mới. Mong đợi 2 dòng:

| email | club_id | expiry | revoked |
|---|---|---|---|
| lan@gmail.com | english-club | 4102444800 | 0 |
| nam@gmail.com | english-club | 1 | 0 |

Thực tế (ghi lại những gì bạn thấy): ______________________________

Ảnh: `anh-test/database.png`

## Nhận xét

- Test nào không đạt và nguyên nhân: ______________________________
- Hạn chế hiện tại: `/check` nhận thẳng `email` qua tham số, chưa có xác thực. Ai cũng có thể điền email của người khác. Sẽ sửa ở tuần 5 bằng Google ID token, và đây cũng là phép thử bảo mật "giả danh" ở tuần 9.
