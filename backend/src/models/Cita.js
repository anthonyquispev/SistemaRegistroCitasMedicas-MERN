const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    correo: {
        type: String,
        required: true,
        trim: true
    },
    medico: {
        type: String,
        required: true,
        trim: true
    },
    especialidad: {
        type: String,
        required: true,
        trim: true
    },
    fecha: {
        type: Object,
        required: true,
        trim: true
    },
    hora: {
        type: String,
        required: true,
        trim: true
    },
    atendido: {
        type: Boolean,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = model('Citas', userSchema);
