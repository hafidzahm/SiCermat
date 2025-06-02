"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StockOpname extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StockOpname.hasMany(models.GroupStockOpname, {
        foreignKey: "GroupStockOpnameId",
      });
      StockOpname.hasMany(models.User, { foreignKey: "UserId" });
      StockOpname.belongsTo(models.DetailStockOpname);
    }
  }
  StockOpname.init(
    {
      UserId: DataTypes.INTEGER,
      GroupStockOpnameId: DataTypes.INTEGER,
      startedAt: DataTypes.DATE,
      endedAt: DataTypes.DATE,
      note: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "StockOpname",
    }
  );
  return StockOpname;
};
