const express = require('express');
const router = express.Router();
const { getProveedores, createProveedor, deleteProveedor } = require('../controllers/proveedorController.cjs');

router.get('/', getProveedores);
router.post('/', createProveedor);
router.delete('/:id', deleteProveedor);

module.exports = router;