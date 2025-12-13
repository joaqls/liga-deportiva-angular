const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Crear partido (ADMIN)
router.post('/', async (req, res) => {
  try {
    const partido = new Partido(req.body);
    await partido.save();
    res.status(201).json(partido);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear partido' });
  }
});

// Listar todos los partidos
router.get('/', async (req, res) => {
  try {
    const partidos = await Partido.find().sort({ fecha: 1 });
    res.json(partidos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener partidos' });
  }
});

// Partidos por árbitro
router.get('/arbitro/:arbitro', async (req, res) => {
  try {
    const partidos = await Partido.find({ arbitro: req.params.arbitro });
    res.json(partidos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener partidos del árbitro' });
  }
});

// Partidos por equipo
router.get('/equipo/:equipo', async (req, res) => {
  try {
    const partidos = await Partido.find({
      $or: [
        { equipoLocal: req.params.equipo },
        { equipoVisitante: req.params.equipo }
      ]
    });
    res.json(partidos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener partidos del equipo' });
  }
});

module.exports = router;