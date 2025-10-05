const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../database');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
    if (err || !user) return res.status(401).json({ message: "Invalid credentials" });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '12h' });
    res.json({ token, user: { id: user.id, role: user.role, username: user.username } });
  });
};

exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  const hash = await bcrypt.hash(password, 10);
  db.run('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, hash, role], function(err) {
    if (err) return res.status(400).json({ message: "User exists or error" });
    res.json({ id: this.lastID, username, role });
  });
};

exports.resetPassword = async (req, res) => {
  const { username, newPassword } = req.body;
  const hash = await bcrypt.hash(newPassword, 10);
  db.run('UPDATE users SET password = ? WHERE username = ?', [hash, username], function(err) {
    if (err) return res.status(400).json({ message: "Error updating password" });
    res.json({ message: "Password updated" });
  });
};