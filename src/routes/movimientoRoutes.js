const express = require('express');
const router = express.Router();
const { getMovimientos, createMovimiento } = require('../controllers/movimientoController.cjs');

router.get('/', getMovimientos);
router.post('/', createMovimiento);

module.exports = router;