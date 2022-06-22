const { Router } = require('express');
const router = Router();

const { getEspecialidades, createEspecialidades, getEspecialidad, updateEspecialidad, deleteEspecialidad } = require('../controllers/especialidades.controller');

router.route('/')
    .get(getEspecialidades)
    .post(createEspecialidades);

router.route('/:id')
    .get(getEspecialidad)
    .put(updateEspecialidad)
    .delete(deleteEspecialidad); 

module.exports = router;