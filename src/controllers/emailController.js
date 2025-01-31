const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'cezarduqueconstrucoes@gmail.com',
                pass: process.env.EMAIL_PASS || 'kcuvsjcgisfrtgwc',
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || 'cezarduqueconstrucoes@gmail.com',
            to: process.env.EMAIL_USER || 'cezarduqueconstrucoes@gmail.com',
            subject: 'NOVO CONTATO',
            text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ error: 'Erro ao enviar e-mail. Tente novamente mais tarde.' });
    }
};

module.exports = { sendEmail };