"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.DetailStockOpname);
      Product.belongsTo(models.DetailTransaction);
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      buyPrice: DataTypes.INTEGER,
      sellPrice: DataTypes.INTEGER,
      actualStock: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      unit: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
