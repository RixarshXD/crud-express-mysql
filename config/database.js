const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("express_crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("conexion exitosa"))
  .catch((err) => console.log("error de conexion", err));

module.exports = sequelize;
