// controllers/agendamentosController.js
// Por enquanto guarda em memória. Depois trocaremos pelo MySQL.

const agendamentos = []; // array temporário (será substituído pelo banco)

exports.criar = (req, res) => {
  const { nome, telefone, servico, data, periodo, endereco, mensagem } = req.body;

  // Validação básica
  if (!nome || !telefone || !servico || !data) {
    return res.status(400).json({ erro: 'Preencha os campos obrigatórios.' });
  }

  const novo = {
    id:        agendamentos.length + 1,
    nome,
    telefone,
    servico,
    data,
    periodo:   periodo || 'manha',
    endereco:  endereco || '',
    mensagem:  mensagem || '',
    status:    'pendente',
    criadoEm:  new Date().toISOString(),
  };

  agendamentos.push(novo);

  console.log(`📅 Novo agendamento: ${nome} — ${servico} em ${data}`);

  return res.status(201).json({ sucesso: true, agendamento: novo });
};

exports.listar = (req, res) => {
  return res.json({ agendamentos });
};
