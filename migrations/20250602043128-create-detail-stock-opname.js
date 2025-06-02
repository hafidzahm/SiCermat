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
        references: {
          model: "StockOpnames",
          key: "id",
        },
        allowNull: false,
      },
      ProductId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
        allowNull: false,
      },
      systemStock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      resultStock: {
        type: Sequelize.INTEGER,
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
