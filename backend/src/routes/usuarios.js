const { Router } = require('express');
const router = Router();

const { getUsuarios, createUsuarios, getUsuario, updateUsuario, deleteUsuario } = require('../controllers/usuarios.controller');

router.route('/')
    .get(getUsuarios)
    .post(createUsuarios);

router.route('/:id')
    .get(getUsuario)
    .put(updateUsuario)
    .delete(deleteUsuario); 

module.exports = router;