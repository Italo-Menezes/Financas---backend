"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Financas extends Model {
    static associate(models) {
      this.belongsTo(models.Categoria, { foreignKey: "categoria_id" });
    }
  }
  Financas.init(
    {
      date: DataTypes.DATEONLY,
      categoria_id: DataTypes.INTEGER,
      titulo: DataTypes.STRING,
      valor: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "Financas",
    }
  );
  return Financas;
};
