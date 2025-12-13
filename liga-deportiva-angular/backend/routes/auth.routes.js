const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// POST /api/login
router.post('/login', async (req, res) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.status(400).json({ message: 'Datos incompletos' });
  }

  try {
    const user = await Usuario.findOne({ usuario, password });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Token simulado (luego será JWT)
    res.json({
      token: 'token-simulado',
      rol: user.rol
    });

  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
