const express = require("express");
const indexRouter = require('./routes/index');
const usuariosRouter = require('./routes/usuarios');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);

app.listen(3000, () => console.log("Server running on port 3000"))