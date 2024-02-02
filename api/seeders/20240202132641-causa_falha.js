'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('causa_falha', [
      {
        id_falha : 1,
        descricao : "Telefone não atendeu",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_falha : 2,
        descricao : "Telefone não existe",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_falha : 3,
        descricao : "Chamada cancelada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_falha : 4,
        descricao : "Chamada rejeitada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_falha : 5,
        descricao : "Telefone mudou",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_falha : 6,
        descricao : "Telefone ocupado",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_falha : 7,
        descricao : "Caixa postal",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_falha : 8,
        descricao : "Abandono pelo contato",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_falha : 9,
        descricao : "Abandono por falta de agentes",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_falha : 10,
        descricao : "Temporariamente indisponível",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_falha : 12,
        descricao : "Opção incorreta de URA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_falha : 13,
        descricao : "Outros",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('causa_falha', null, {});
     
  }
};
