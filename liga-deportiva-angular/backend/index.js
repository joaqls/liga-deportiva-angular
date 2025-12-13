const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');

const authRoutes = require('./routes/auth.routes');
const partidosRoutes = require('./routes/partidos.routes');

const app = express();

// Conectar a MongoDB
conectarDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', authRoutes);
app.use('/api/partidos', partidosRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API Liga Deportiva funcionando');
});

// Arrancar servidor (SIEMPRE AL FINAL)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});