const express = require('express');
const { createSession, getSessions, updateSession } = require('../controllers/sessionController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, createSession);
router.get('/', authenticate, getSessions);
router.put('/:id', authenticate, updateSession);

module.exports = router;
