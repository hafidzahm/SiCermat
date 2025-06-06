"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.DetailTransaction);
      Transaction.hasMany(models.User, { foreignKey: "UserId" });
    }
  }
  Transaction.init(
    {
      UserId: DataTypes.INTEGER,
      transactionDate: DataTypes.DATE,
      totalTransaction: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
