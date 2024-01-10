'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class causa_falha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  causa_falha.init({
    id_falha: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'causa_falha',
  });
  return causa_falha;
};