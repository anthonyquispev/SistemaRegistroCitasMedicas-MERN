const citasCtrl = {};

const Cita = require('../models/Cita');

citasCtrl.getCitas = async (req, res) => {
    try {
        const citas = await Cita.find();
        res.json(citas);
    } catch (error) {
        return res.json({ message: error.message })
    }
}

citasCtrl.createCitas = async (req, res) => {
    try {
        const { correo, medico, especialidad, fecha, hora, atendido } = req.body;
        const newCita = new Cita({
            correo: correo,
            medico: medico,
            especialidad: especialidad,
            fecha: fecha,
            hora: hora,
            atendido: atendido
        });
        await newCita.save();
        res.json({ message: 'Cita registrada' })
    } catch (error) {
        return res.json({ message: error.message })
    }
}

citasCtrl.getCita = async (req, res) => {
    try {
        const cita = await Cita.find({ correo: { $eq: req.params.id } });
        res.json(cita);
    } catch (error) {
        return res.json({ message: error.message })
    }
}

citasCtrl.updateCita = async (req, res) => {
    try {
        const { correo, medico, especialidad, fecha, hora, atendido } = req.body;
        await Cita.findByIdAndUpdate(req.params.id, {
            correo,
            medico,
            especialidad,
            fecha,
            hora,
            atendido
        });
        res.json({ message: 'Cita actualizada' })
    } catch (error) {
        return res.json({ message: error.message })
    }
}

citasCtrl.deleteCita = async (req, res) => {
    try {
        await Cita.findByIdAndDelete(req.params.id);
        res.json({ message: 'Cita eliminada' })
    } catch (error) {
        return res.json({ message: error.message })
    }
}

module.exports = citasCtrl;