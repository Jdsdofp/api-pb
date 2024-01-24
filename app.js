const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB, especificando o banco de dados
mongoose.connect('mongodb+srv://userpb:XpLCTFPlizi4L8oC@formsapp.qefeoy4.mongodb.net/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const registrosCollection = mongoose.connection.collection('registros');

app.get('/', async (req, res) => {
  try {
    const registros = await registrosCollection.find().toArray();
    res.json({ registros });
  } catch (error) {
    console.error('Erro ao buscar registros:', error);
    res.status(500).json({ error: 'Erro ao buscar registros' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
