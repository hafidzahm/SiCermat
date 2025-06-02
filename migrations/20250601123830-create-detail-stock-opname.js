"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DetailStockOpnames", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      StockOpnameId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ProductId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      systemStock: {
        type: Sequelize.INTEGER,
      },
      resultStock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      differenceStock: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("DetailStockOpnames");
  },
};
