const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.message === 'Acesso não permitido por CORS') {
        return res.status(403).json({ error: err.message });
    }

    res.status(500).json({ error: 'Erro interno no servidor.' });
};

module.exports = errorHandler;