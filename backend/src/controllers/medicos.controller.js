const medicosCtrl = {};

const Medico = require('../models/Medico');

medicosCtrl.getMedicos = async (req, res) => {
    try {
        const medicos = await Medico.find();
        res.json(medicos);
    } catch (error) {
        return res.json({ message: error.message })
    }
}

medicosCtrl.createMedicos = async (req, res) => {
    try {
        const { nombres, especialidad, imagen, diasDisponibles } = req.body;
        const newMedico = new Medico({
            nombres: nombres,
            especialidad: especialidad,
            imagen: imagen,
            diasDisponibles: diasDisponibles
        });
        await newMedico.save();
        res.json({ message: 'Médico registrado' })
    } catch (error) {
        return res.json({ message: error.message })
    }
}

medicosCtrl.getMedico = async (req, res) => {
    try {
        const medico = await Medico.find({ nombres: { $eq: req.params.id } });
        res.json(medico);
    } catch (error) {
        return res.json({ message: error.message })
    }
}

medicosCtrl.updateMedico = async (req, res) => {
    try {
        const { nombres, especialidad, imagen, diasDisponibles } = req.body;
        await Medico.findByIdAndUpdate(req.params.id, {
            nombres,
            especialidad,
            imagen,
            diasDisponibles
        });
        res.json({ message: 'Médico actualizado' })
    } catch (error) {
        return res.json({ message: error.message })
    }
}

medicosCtrl.deleteMedico = async (req, res) => {
    try {
        await Medico.findByIdAndDelete(req.params.id);
        res.json({ message: 'Médico eliminado' })
    } catch (error) {
        return res.json({ message: error.message })
    }
}

module.exports = medicosCtrl;