const express = require('express');
const { sendNotifications } = require('../controllers/notificationController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, sendNotifications);

module.exports = router;
