## Thiết kế bảng members

```sql
CREATE TABLE IF NOT EXISTS members (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  email    TEXT    NOT NULL,
  club_id  TEXT    NOT NULL,
  expiry   INTEGER NOT NULL,
  revoked  INTEGER NOT NULL DEFAULT 0,
  UNIQUE (email, club_id)
