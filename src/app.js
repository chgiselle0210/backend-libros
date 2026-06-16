require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const axios = require('axios');

const app = express();

app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API Biblioteca funcionando correctamente'
  });
});

app.get('/libros', (req, res) => {

  const sql = `
    SELECT
      l.id_libro,
      l.titulo,
      l.genero,
      l.anio_publicacion,
      a.nombre AS autor,
      a.nacionalidad
    FROM Libros l
    INNER JOIN Autores a
      ON l.id_autor = a.id_autor
  `;

  connection.query(sql, (error, results) => {

    if (error) {
      return res.status(500).json(error);
    }

    res.json(results);

  });

});

app.get('/libros/:id', (req, res) => {

  const { id } = req.params;

  const sql = `
    SELECT
      l.id_libro,
      l.titulo,
      l.genero,
      l.anio_publicacion,
      a.nombre AS autor,
      a.nacionalidad
    FROM Libros l
    INNER JOIN Autores a
      ON l.id_autor = a.id_autor
    WHERE l.id_libro = ?
  `;

  connection.query(sql, [id], (error, results) => {

    if (error) {
      return res.status(500).json(error);
    }

    if (results.length === 0) {

      return res.status(404).json({
        mensaje: 'Libro no encontrado'
      });

    }

    res.json(results[0]);

  });

});

app.get('/ubicacion', async (req, res) => {

  try {

    const response = await axios.get(
      'http://ip-api.com/json/'
    );

    res.json(response.data);

  } catch (error) {

    res.status(500).json({
      mensaje: 'Error al obtener ubicación',
      error: error.message
    });

  }

});

app.listen(process.env.PORT, () => {

  console.log(
    `Servidor ejecutándose en puerto ${process.env.PORT}`
  );

});