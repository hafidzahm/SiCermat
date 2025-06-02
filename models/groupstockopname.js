'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupStockOpname extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupStockOpname.init({
    groupName: DataTypes.STRING,
    description: DataTypes.STRING,
    note: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GroupStockOpname',
  });
  return GroupStockOpname;
};