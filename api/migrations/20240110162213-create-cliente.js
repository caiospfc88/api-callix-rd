'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cliente', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cliente: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      emissao: {
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      telefone1: {
        type: Sequelize.STRING
      },
      telefone2: {
        type: Sequelize.STRING
      },
      telefone3: {
        type: Sequelize.STRING
      },
      produto: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      aceitou_proposta: {
        type: Sequelize.STRING
      },
      uf: {
        type: Sequelize.STRING
      },
      status_negociacao: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cliente');
  }
};