const usuariosCtrl = {};

const Usuario = require('../models/Usuario');

usuariosCtrl.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        return res.json({ message: error.message })
    }
}

usuariosCtrl.createUsuarios = async (req, res) => {
    try {
        const { correo, apellidos, nombres, distrito } = req.body;
        const newUsuario = new Usuario({
            correo: correo,
            apellidos: apellidos,
            nombres: nombres,
            distrito: distrito
        });
        await newUsuario.save();
        res.json({ message: 'Usuario registrado' })
    } catch (error) {
        return res.json({ message: error.message })
    }
}

usuariosCtrl.getUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.find({ correo: { $eq: req.params.id } });
        res.json(usuario);
    } catch (error) {
        return res.json({ message: error.message })
    }
}

usuariosCtrl.updateUsuario = async (req, res) => {
    try {
        const { correo, apellidos, nombres, distrito } = req.body;
        await Usuario.findByIdAndUpdate(req.params.id, {
            correo,
            apellidos,
            nombres,
            distrito
        });
        res.json({ message: 'Usuario actualizado' })
    } catch (error) {
        return res.json({ message: error.message })
    }
}

usuariosCtrl.deleteUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.json({ message: 'Usuario eliminado' })
    } catch (error) {
        return res.json({ message: error.message })
    }
}

module.exports = usuariosCtrl;