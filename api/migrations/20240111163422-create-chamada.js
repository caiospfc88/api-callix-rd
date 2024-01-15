'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('chamadas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_chamada: {
        type: Sequelize.STRING
      },
      dth_inicio: {
        type: Sequelize.STRING
      },
      dth_fim: {
        type: Sequelize.STRING
      },
      duracao_segundos: {
        type: Sequelize.INTEGER
      },
      tel_destino: {
        type: Sequelize.STRING
      },
      protocolo: {
        type: Sequelize.INTEGER
      },
      id_motivo_desligo: {
        type: Sequelize.INTEGER
      },
      id_campanha: {
        type: Sequelize.STRING
      },
      id_cliente: {
        type: Sequelize.STRING
      },
      id_qualificacao: {
        type: Sequelize.STRING
      },
      id_operador: {
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
    await queryInterface.dropTable('chamadas');
  }
};