const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    correo: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    apellidos: {
        type: String,
        required: true,
        trim: true,
    },
    nombres: {
        type: String,
        required: true,
        trim: true
    },
    distrito: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
});

module.exports = model('Usuarios', userSchema);
