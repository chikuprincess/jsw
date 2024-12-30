const express = require('express');
const protect = require('../middleware/authMiddleware');
const { getUserInfo } = require('../controllers/userController');
const router = express.Router();

router.get('/me', protect, getUserInfo);

module.exports = router;
