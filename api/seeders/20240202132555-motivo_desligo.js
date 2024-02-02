'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('motivo_desligo', [
      {
        id_motivo : 1,
        descricao : "Cliente desligou",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_motivo : 2,
        descricao : "Operador desligou",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_motivo : 3,
        descricao : "Sistema desligou",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_motivo : 4,
        descricao : "interrupção",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_motivo : 5,
        descricao : "Callback",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_motivo : 6,
        descricao : "Limite de tempo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_motivo : 7,
        descricao : "Supervisor",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('motivo_desligo', null, {});
  }
};
