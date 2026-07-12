const db = require('../db/models/index.cjs');

const Solicitud = db.Solicitud;

// Obtener todas las solicitudes
const obtenerSolicitudes = async (req, res) => {
  try {
    const solicitudes = await Solicitud.findAll({
      order: [['id', 'ASC']]
    });

    res.status(200).json(solicitudes);
  } catch (error) {
    console.error('Error al obtener solicitudes:', error);

    res.status(500).json({
      mensaje: 'Error al obtener las solicitudes'
    });
  }
};

// Obtener una solicitud por ID
const obtenerSolicitudPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const solicitud = await Solicitud.findByPk(id);

    if (!solicitud) {
      return res.status(404).json({
        mensaje: 'Solicitud no encontrada'
      });
    }

    res.status(200).json(solicitud);
  } catch (error) {
    console.error('Error al obtener la solicitud:', error);

    res.status(500).json({
      mensaje: 'Error al obtener la solicitud'
    });
  }
};

// Crear una solicitud
const crearSolicitud = async (req, res) => {
  try {
    const {
      producto,
      talla,
      cantidad,
      prioridad,
      usuario_id
    } = req.body;

    if (!producto || !cantidad || !prioridad) {
      return res.status(400).json({
        mensaje: 'Producto, cantidad y prioridad son obligatorios'
      });
    }

    const nuevaSolicitud = await Solicitud.create({
      producto,
      talla,
      cantidad,
      prioridad,
      estado: 'Pendiente de aprobación',
      usuario_id
    });

    res.status(201).json({
      mensaje: 'Solicitud creada correctamente',
      solicitud: nuevaSolicitud
    });
  } catch (error) {
    console.error('Error al crear la solicitud:', error);

    res.status(500).json({
      mensaje: 'Error al crear la solicitud'
    });
  }
};

// Actualizar una solicitud
const actualizarSolicitud = async (req, res) => {
  try {
    const { id } = req.params;

    const solicitud = await Solicitud.findByPk(id);

    if (!solicitud) {
      return res.status(404).json({
        mensaje: 'Solicitud no encontrada'
      });
    }

    await solicitud.update(req.body);

    res.status(200).json({
      mensaje: 'Solicitud actualizada correctamente',
      solicitud
    });
  } catch (error) {
    console.error('Error al actualizar la solicitud:', error);

    res.status(500).json({
      mensaje: 'Error al actualizar la solicitud'
    });
  }
};

// Eliminar una solicitud
const eliminarSolicitud = async (req, res) => {
  try {
    const { id } = req.params;

    const solicitud = await Solicitud.findByPk(id);

    if (!solicitud) {
      return res.status(404).json({
        mensaje: 'Solicitud no encontrada'
      });
    }

    await solicitud.destroy();

    res.status(200).json({
      mensaje: 'Solicitud eliminada correctamente'
    });
  } catch (error) {
    console.error('Error al eliminar la solicitud:', error);

    res.status(500).json({
      mensaje: 'Error al eliminar la solicitud'
    });
  }
};

// Aprobar una solicitud
const aprobarSolicitud = async (req, res) => {
  try {
    const { id } = req.params;

    const solicitud = await Solicitud.findByPk(id);

    if (!solicitud) {
      return res.status(404).json({
        mensaje: 'Solicitud no encontrada'
      });
    }

    solicitud.estado = 'Aprobada';
    await solicitud.save();

    res.status(200).json({
      mensaje: 'Solicitud aprobada correctamente',
      solicitud
    });
  } catch (error) {
    console.error('Error al aprobar la solicitud:', error);

    res.status(500).json({
      mensaje: 'Error al aprobar la solicitud'
    });
  }
};

// Completar una solicitud
const completarSolicitud = async (req, res) => {
  try {
    const { id } = req.params;

    const solicitud = await Solicitud.findByPk(id);

    if (!solicitud) {
      return res.status(404).json({
        mensaje: 'Solicitud no encontrada'
      });
    }

    solicitud.estado = 'Completada';
    await solicitud.save();

    res.status(200).json({
      mensaje: 'Solicitud completada correctamente',
      solicitud
    });
  } catch (error) {
    console.error('Error al completar la solicitud:', error);

    res.status(500).json({
      mensaje: 'Error al completar la solicitud'
    });
  }
};

module.exports = {
  obtenerSolicitudes,
  obtenerSolicitudPorId,
  crearSolicitud,
  actualizarSolicitud,
  eliminarSolicitud,
  aprobarSolicitud,
  completarSolicitud
};