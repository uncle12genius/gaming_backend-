const express = require('express');
const { generateReport } = require('../controllers/reportController');
const authenticate = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');
const router = express.Router();

router.get('/', authenticate, authorize(['admin']), generateReport);

module.exports = router;
