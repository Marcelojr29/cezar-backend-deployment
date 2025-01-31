const express = require('express');
const { emailValidator, validate } = require('../validators/emailValidator');
const { sendEmail } = require('../controllers/emailController');

const router = express.Router();

router.post('/send-email', emailValidator, validate, sendEmail);

module.exports = router;