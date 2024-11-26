const express = require('express');
const { registerStaff } = require('../controllers/adminController');
const authenticate = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/register-staff', authenticate, authorize(['admin']), registerStaff);

module.exports = router;
