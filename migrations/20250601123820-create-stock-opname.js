"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("StockOpnames", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      EmployeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      GroupStockOpname: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      GroupStockOpnameId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      startedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      note: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("StockOpnames");
  },
};
