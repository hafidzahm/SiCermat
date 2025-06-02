"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetailTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetailTransaction.hasMany(models.Transaction, {
        foreignKey: "TransactionId",
      });
      DetailTransaction.hasMany(models.Product, { foreignKey: "ProductId" });
    }
  }
  DetailTransaction.init(
    {
      TransactionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Transactions",
          key: "id",
        },
      },
      ProductId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      totalQuantity: DataTypes.INTEGER,
      sellPriceTransaction: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DetailTransaction",
    }
  );
  return DetailTransaction;
};
