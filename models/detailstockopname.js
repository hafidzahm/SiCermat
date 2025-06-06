"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetailStockOpname extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetailStockOpname.hasMany(models.StockOpname, {
        foreignKey: "StockOpnameId",
      });

      DetailStockOpname.hasMany(models.Product, { foreignKey: "ProductId" });
    }
  }
  DetailStockOpname.init(
    {
      StockOpnameId: DataTypes.INTEGER,
      ProductId: DataTypes.INTEGER,
      systemStock: DataTypes.INTEGER,
      resultStock: DataTypes.INTEGER,
      differenceStock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DetailStockOpname",
    }
  );
  return DetailStockOpname;
};
