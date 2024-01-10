'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chamada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.chamada.hasOne(models.operador);
      models.chamada.hasOne(models.qualificacao);
      models.chamada.hasOne(models.cliente);
      models.chamada.hasOne(models.campanha);
      models.chamada.hasOne(models.motivo_desligo);
    }
  }
  chamada.init({
    id_chamada: DataTypes.STRING,
    dth_inicio: DataTypes.STRING,
    dth_fim: DataTypes.STRING,
    duracao_segundos: DataTypes.INTEGER,
    tel_destino: DataTypes.STRING,
    protocolo: DataTypes.INTEGER,
    id_motivo_desligo: DataTypes.INTEGER,
    id_campanha: DataTypes.STRING,
    id_cliente: DataTypes.STRING,
    id_qualificacao: DataTypes.STRING,
    id_operador: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'chamada',
  });
  return chamada;
};