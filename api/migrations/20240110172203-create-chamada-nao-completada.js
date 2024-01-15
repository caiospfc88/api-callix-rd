'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('chamada_nao_completada', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_tentativa: {
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
      id_falha: {
        type: Sequelize.INTEGER
      },
      id_campanha: {
        type: Sequelize.STRING
      },
      id_cliente: {
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
    await queryInterface.dropTable('chamada_nao_completada');
  }
};