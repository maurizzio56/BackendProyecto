const express = require('express');
const router = express.Router();

// Llenar
const {
  obtenerSolicitudes,
  obtenerSolicitudPorId,
  crearSolicitud,
  actualizarSolicitud,
  eliminarSolicitud,
  aprobarSolicitud,
  completarSolicitud
} = require('../controllers/solicitudController');

router.get('/', obtenerSolicitudes);

router.get('/:id', obtenerSolicitudPorId);

router.post('/', crearSolicitud);

router.put('/:id', actualizarSolicitud);

router.delete('/:id', eliminarSolicitud);

router.put('/:id/aprobar', aprobarSolicitud);

router.put('/:id/completar', completarSolicitud);

module.exports = router;