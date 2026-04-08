// routes/agendamentos.js
const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/agendamentosController');

// POST /api/agendamentos — criar novo agendamento
router.post('/', ctrl.criar);

// GET /api/agendamentos — listar todos (painel admin, futuro)
router.get('/', ctrl.listar);

module.exports = router;
