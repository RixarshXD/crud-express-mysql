const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Model = sequelize.define(
  "Model",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "Models",
    timestamps: true,
  }
);

module.exports = Model;
