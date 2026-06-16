require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API Biblioteca funcionando correctamente'
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${process.env.PORT}`);
});