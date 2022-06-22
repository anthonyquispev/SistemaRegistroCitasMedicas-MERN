const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/medicos', require('./routes/medicos'));
app.use('/api/especialidades', require('./routes/especialidades'));
app.use('/api/citas', require('./routes/citas'));

module.exports = app;