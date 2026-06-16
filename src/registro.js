require('dotenv').config();

const mysql = require('mysql2');
const axios = require('axios');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'registro'
});

async function guardarUbicacionYHora() {

  try {

    const response = await axios.get(
      'http://ip-api.com/json/'
    );

    const datos = response.data;

    const latitud = datos.lat;
    const longitud = datos.lon;

    const horaActual = new Date();

    const sql = `
      INSERT INTO horas (
        longitud,
        latitud,
        hora
      )
      VALUES (?, ?, ?)
    `;

    connection.query(
      sql,
      [
        longitud,
        latitud,
        horaActual
      ],
      (error, results) => {

        if (error) {

          console.error(
            'Error al guardar datos:',
            error
          );

          return;
        }

        console.log(
          'Registro almacenado correctamente'
        );

        console.log({
          longitud,
          latitud,
          hora: horaActual
        });

        connection.end();

      }
    );

  } catch (error) {

    console.error(
      'Error al consumir la API:',
      error.message
    );

  }

}

guardarUbicacionYHora();