const { body, validationResult } = require('express-validator');

const emailValidator = [
    body('name').trim().notEmpty().withMessage('Nome é obrigatório.'),
    body('email').isEmail().withMessage('E-mail inválido.'),
    body('phone').trim().notEmpty().withMessage('Telefone é obrigatório.'),
    body('message').trim().notEmpty().withMessage('Mensagem é obrigatória.'),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { emailValidator, validate };