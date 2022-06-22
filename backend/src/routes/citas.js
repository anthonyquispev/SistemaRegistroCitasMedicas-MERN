const { Router } = require('express');
const router = Router();

const { getCitas, createCitas, getCita, updateCita, deleteCita } = require('../controllers/citas.controller');

router.route('/')
    .get(getCitas)
    .post(createCitas);

router.route('/:id')
    .get(getCita)
    .put(updateCita)
    .delete(deleteCita);

module.exports = router;