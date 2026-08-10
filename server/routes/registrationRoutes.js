const express = require('express');
const router = express.Router();

// 🔗 Your Google Form link
const GOOGLE_FORM_URL = "https://forms.gle/ULqwLTu2izgfYckC9";

/**
 * ✅ GET /api/registrations
 * Redirects directly to Google Form
 */
router.get('/', (req, res) => {
  return res.redirect(GOOGLE_FORM_URL);
});

module.exports = router;