const especialidadesCtrl = {};

const Especialidad = require('../models/Especialidad');

especialidadesCtrl.getEspecialidades = async (req, res) => {
    try {
        const especialidades = await Especialidad.find();
        res.json(especialidades);
    } catch (error) {
        return res.json({message: error.message})
    }
}

especialidadesCtrl.createEspecialidades = async (req, res) => {
    try {
        const { especialidad, descripcion, imagen } = req.body;
        const newEspecialidad = new Especialidad({
            especialidad: especialidad,
            descripcion: descripcion,
            imagen: imagen
        });
        await newEspecialidad.save();
        res.json({ message: 'Especialidad registrada' })
    } catch (error) {
        return res.json({message: error.message})
    }
}

especialidadesCtrl.getEspecialidad = async (req, res) => {
    try {
        const especialidad = await Especialidad.findById(req.params.id);
        res.json(especialidad);
    } catch (error) {
        return res.json({message: error.message})
    }
}

especialidadesCtrl.updateEspecialidad = async (req, res) => {
    try {
        const { especialidad, descripcion, imagen } = req.body;
        await Especialidad.findByIdAndUpdate(req.params.id, {
            especialidad,
            descripcion,
            imagen
        });
        res.json({ message: 'Especialidad actualizada' })
    } catch (error) {
        return res.json({message: error.message})
    }
}

especialidadesCtrl.deleteEspecialidad = async (req, res) => {
    try {
        await Especialidad.findByIdAndDelete(req.params.id);
        res.json({ message: 'Especialidad eliminada' })
    } catch (error) {
        return res.json({message: error.message})
    }
}

module.exports = especialidadesCtrl;