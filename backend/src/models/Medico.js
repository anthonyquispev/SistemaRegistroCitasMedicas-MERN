const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    nombres: {
        type: String,
        required: true,
        trim: true,
    },
    especialidad: {
        type: String,
        required: true,
        trim: true
    },
    imagen: {
        type: String,
        required: true,
        trim: true
    },
    diasDisponibles: {
        type: Array,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = model('Medicos', userSchema);
