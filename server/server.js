const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
const port =  3000;

app.use(express.static(path.join(__dirname, '../dist')));
app.use("/opt/render/project/src/dist/",express.static(path.join(__dirname, '../dist')));
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
