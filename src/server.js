const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// Configuración de CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Ruta específica para servir la fuente
app.get('/fonts/gotham-black-regular.ttf', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/fonts/gotham-black-regular.ttf'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
