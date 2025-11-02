const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const authenticateToken = require('../../../QA/qa-playground/backend/middleware/authMiddleware');

const router = express.Router();
const dbPath = path.resolve(__dirname, '../database/qa_playground.db');
const db = new sqlite3.Database(dbPath);

router.get('/', authenticateToken, (req, res) => {
  db.all(`SELECT id, name, email, created_at FROM users`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;
