'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chamada_nao_completada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chamada_nao_completada.init({
    id_tentativa: DataTypes.STRING,
    dth_inicio: DataTypes.STRING,
    dth_fim: DataTypes.STRING,
    duracao_segundos: DataTypes.INTEGER,
    tel_destino: DataTypes.STRING,
    id_falha: DataTypes.INTEGER,
    id_campanha: DataTypes.STRING,
    id_cliente: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'chamada_nao_completada',
  });
  return chamada_nao_completada;
};