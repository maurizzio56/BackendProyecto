const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db/models/index.cjs');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Importar rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const productoRoutes = require('./routes/productoRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');
const movimientoRoutes = require('./routes/movimientoRoutes');
const solicitudRoutes = require('./routes/solicitudRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

// Usar rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/movimientos', movimientoRoutes);
app.use('/api/solicitudes', solicitudRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

const PORT = process.env.PORT || 5000;

db.sequelize.sync({ alter: true })
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al conectar DB:', err);
  });