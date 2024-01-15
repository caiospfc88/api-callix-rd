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
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'motivo_desligo',
          key: 'id_motivo'
        }
      },
      id_campanha: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'campanha',
          key: 'id_campanha'
        }
      },
      id_cliente: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'cliente',
          key: 'id_cliente'
        }
      },
      id_qualificacao: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'qualificacao',
          key: 'id_qualificacao'
        }
      },
      id_operador: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'operador',
          key: 'id_usuario'
        }
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