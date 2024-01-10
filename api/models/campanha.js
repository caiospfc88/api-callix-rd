'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class campanha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.campanha.hasMany(models.chamada);
      models.campanha.hasMany(models.chamada_nao_completada);
      // define association here
    }
  }
  campanha.init({
    id_campanha: DataTypes.STRING,
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'campanha',
  });

  return campanha;
};