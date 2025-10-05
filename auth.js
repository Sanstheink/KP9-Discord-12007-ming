const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const { requireRole } = require('../middlewares/auth');

router.post('/login', AuthController.login);
router.post('/register', requireRole(['CEO', 'SO', 'DEV']), AuthController.register);
router.post('/reset-password', requireRole(['CEO', 'SO', 'DEV']), AuthController.resetPassword);

module.exports = router;