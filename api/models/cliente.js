'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cliente.init({
    id_callix: DataTypes.STRING,
    emissao: DataTypes.STRING,
    nome: DataTypes.STRING,
    telefone1: DataTypes.STRING,
    telefone2: DataTypes.STRING,
    telefone3: DataTypes.STRING,
    produto: DataTypes.INTEGER,
    email: DataTypes.STRING,
    aceitou_proposta: DataTypes.STRING,
    uf: DataTypes.STRING,
    status_negociacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
  });
  return cliente;
};