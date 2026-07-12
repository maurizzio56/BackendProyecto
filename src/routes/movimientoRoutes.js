const express = require('express');
const router = express.Router();
const movimientoController = require('../controllers/movimientoController');

router.get('/', movimientoController.getAllMovimientos);
router.get('/tipo/:tipo', movimientoController.getMovimientosByTipo);
router.get('/:id', movimientoController.getMovimientoById);
router.post('/', movimientoController.createMovimiento);
router.put('/:id', movimientoController.updateMovimiento);
router.delete('/:id', movimientoController.deleteMovimiento);

module.exports = router;