const express = require("express");
const router = express.Router();
const Model = require("../models/modelName");

// Listar todos los registros
router.get("/", async (req, res) => {
  try {
    const models = await Model.findAll();
    res.render("index", { models });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

// Formulario para nuevo registro
router.get("/new", (req, res) => {
  res.render("new");
});

// Crear nuevo registro
router.post("/", async (req, res) => {
  await Model.create(req.body);
  res.redirect("/models");
});

// Mostrar un registro
router.get("/:id", async (req, res) => {
  const model = await Model.findByPk(req.params.id);
  res.render("show", { model });
});

// Formulario para editar registro
router.get("/:id/edit", async (req, res) => {
  const model = await Model.findByPk(req.params.id);
  res.render("edit", { model });
});

// Actualizar registro
router.put("/:id", async (req, res) => {
  await Model.update(req.body, { where: { id: req.params.id } });
  res.redirect("/models");
});

// Eliminar registro
router.delete("/:id", async (req, res) => {
  await Model.destroy({ where: { id: req.params.id } });
  res.redirect("/models");
});

module.exports = router;
