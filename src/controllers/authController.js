const db = require('../db/models/index.cjs');
const Usuario = db.Usuario;

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    if (usuario.password !== password) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    res.json({
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login };