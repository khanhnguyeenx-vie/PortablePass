const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json()); // để đọc được dữ liệu JSON gửi lên

app.get('/health', (req, res) => res.json({ ok: true }));

app.post('/admin/mint', (req, res) => {
  const { email, club_id, expiry } = req.body;
  if (!email || !club_id || !expiry) {
    return res.status(400).json({ ok: false, error: 'Thiếu thông tin' });
  }
  db.prepare(`
    INSERT INTO members (email, club_id, expiry, revoked)
    VALUES (?, ?, ?, 0)
    ON CONFLICT(email, club_id) DO UPDATE SET expiry = excluded.expiry, revoked = 0
  `).run(email, club_id, expiry);
  res.json({ ok: true });
});

app.post('/admin/revoke', (req, res) => {
  const { email, club_id } = req.body;
  if (!email || !club_id) {
    return res.status(400).json({ ok: false, error: 'Thiếu thông tin' });
  }
  const result = db
    .prepare('UPDATE members SET revoked = 1 WHERE email = ? AND club_id = ?')
    .run(email, club_id);
  if (result.changes === 0) {
    return res.status(404).json({ ok: false, error: 'Không tìm thấy thẻ' });
  }
  res.json({ ok: true });
});

app.get('/check', (req, res) => {
  const { email, club_id } = req.query;
  const row = db
    .prepare('SELECT * FROM members WHERE email = ? AND club_id = ?')
    .get(email, club_id);
  const now = Math.floor(Date.now() / 1000);

  if (!row) return res.json({ valid: false, reason: 'no_card' });
  if (row.revoked === 1) return res.json({ valid: false, reason: 'revoked' });
  if (row.expiry <= now) return res.json({ valid: false, reason: 'expired' });
  res.json({ valid: true });
});

app.listen(3000, () => console.log('Chạy ở http://localhost:3000'));