'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addConstraint('chamada_nao_completada',{
      fields: ['id_falha'],
      type: 'foreign key',
      name: 'id_falha_fk',
      references:{
        table : 'causa_falha',
        field : 'id_falha' 
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    await queryInterface.addConstraint('chamada_nao_completada',{
      fields: ['id_campanha'],
      type: 'foreign key',
      name: 'id_campanha_cna_fk',
      references:{
        table : 'campanha',
        field : 'id_campanha' 
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    await queryInterface.addConstraint('chamada_nao_completada',{
      fields: ['id_cliente'],
      type: 'foreign key',
      name: 'id_cliente_cna_fk',
      references:{
        table : 'cliente',
        field : 'id_cliente' 
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeConstraint('id_falha_fk');
     await queryInterface.removeConstraint('id_campanha_cna_fk');
     await queryInterface.removeConstraint('id_cliente_cna_fk');
  }
};
