'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('chamada',{
      fields: ['id_motivo_desligo'],
      type: 'foreign key',
      name: 'id_motivo_desligo_fk',
      references:{
        table : 'motivo_desligo',
        field : 'id_motivo_desligo' 
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    await queryInterface.addConstraint('chamada',{
      fields: ['id_campanha'],
      type: 'foreign key',
      name: 'id_campanha_c_fk',
      references:{
        table : 'campanha',
        field : 'id_campanha' 
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    await queryInterface.addConstraint('chamada',{
      fields: ['id_cliente'],
      type: 'foreign key',
      name: 'id_cliente_c_fk',
      references:{
        table : 'cliente',
        field : 'id_cliente' 
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    await queryInterface.addConstraint('chamada',{
      fields: ['id_qualificacao'],
      type: 'foreign key',
      name: 'id_qualificacao_fk',
      references:{
        table : 'qualificacao',
        field : 'id_qualificacao' 
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    await queryInterface.addConstraint('chamada',{
      fields: ['id_operador'],
      type: 'foreign key',
      name: 'id_operador_fk',
      references:{
        table : 'operador',
        field : 'id_operador' 
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.removeConstraint('id_motivo_desligo_fk');
     await queryInterface.removeConstraint('id_campanha_c_fk');
     await queryInterface.removeConstraint('id_cliente_c_fk');
     await queryInterface.removeConstraint('id_qualificacao_fk');
     await queryInterface.removeConstraint('id_operador_fk');
    
  }
};
