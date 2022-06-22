const { Router } = require('express');
const router = Router();

const { getMedicos, createMedicos, getMedico, updateMedico, deleteMedico } = require('../controllers/medicos.controller');

router.route('/')
    .get(getMedicos)
    .post(createMedicos);

router.route('/:id')
    .get(getMedico)
    .put(updateMedico)
    .delete(deleteMedico); 

module.exports = router;