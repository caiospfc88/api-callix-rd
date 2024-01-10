'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class motivo_desligo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  motivo_desligo.init({
    id_motivo: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'motivo_desligo',
  });
  return motivo_desligo;
};