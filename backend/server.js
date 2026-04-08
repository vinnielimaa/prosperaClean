// =============================================
//  PRÓSPERA CLEAN & CARE — server.js
//  Servidor principal Express
// =============================================

const express = require('express');
const cors    = require('cors');
const path    = require('path');
require('dotenv').config();

const app  = express();
const PORT = process.env.PORT || 3000;

// ---------- MIDDLEWARES ----------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir o frontend estático
app.use(express.static(path.join(__dirname, '../frontend')));

// ---------- ROTAS DA API ----------
const agendamentosRouter = require('./routes/agendamentos');
app.use('/api/agendamentos', agendamentosRouter);

// Rota de health check
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', empresa: 'Próspera Clean & Care' });
});

// Qualquer rota não encontrada → manda pro frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// ---------- INICIAR SERVIDOR ----------
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
