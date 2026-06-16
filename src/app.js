require('dotenv').config();

const express = require('express');
const connection = require('./config/db');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'API Biblioteca funcionando correctamente' });
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
    INNER JOIN Autores a ON l.id_autor = a.id_autor
  `;

  connection.query(sql, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error al consultar los libros' });
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
    INNER JOIN Autores a ON l.id_autor = a.id_autor
    WHERE l.id_libro = ?
  `;

  connection.query(sql, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error al consultar el libro' });
    }

    if (results.length === 0) {
      return res.status(404).json({ mensaje: 'Libro no encontrado' });
    }

    res.json(results[0]);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${process.env.PORT}`);
});