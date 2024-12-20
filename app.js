const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

// Middleware
// esto sirve para poder leer los datos que vienen de un formulario
app.use(bodyParser.urlencoded({ extended: true }));
// metodos para poder hacer put y delete
app.use(methodOverride("_method"));
// carpeta de los archivos estaticos
app.use(express.static("public"));

// configuracion de las vistas
// sirve para que no tengamos que poner la extension de los archivos
app.set("view engine", "ejs");

// Ruta raiz
app.get("/", (req, res) => {
  res.render("index");
});

// Rutas
const modelRoutes = require("./routes/modelRoutes");
app.use("/models", modelRoutes);

// Iniciar el servidor
app.listen(3000, () => {
  console.log(`http://localhost:${3000}`);
});
