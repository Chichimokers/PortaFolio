const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
const port =  3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.use("/public",express.static(path.join(__dirname, '../dist')));
console.log(path.join(__dirname, '../dist'))

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
