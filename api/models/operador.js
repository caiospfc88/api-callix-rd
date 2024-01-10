'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class operador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.operador.hasMany(models.chamada);
    }
  }
  operador.init({
    id_usuario: DataTypes.STRING,
    nome: DataTypes.STRING,
    login: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'operador',
  });
  return operador;
};