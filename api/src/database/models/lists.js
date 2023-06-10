'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lists.belongsTo(models.Icons, {
        foreignKey: 'id_icon',
        as: 'Icons'
      });
      Lists.belongsTo(models.Colors, {
        foreignKey: 'id_color',
        as: 'Colors'
      });
    }
  }
  Lists.init({
    title: DataTypes.STRING,
    id_color: DataTypes.INTEGER,
    id_icon: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lists',
  });
  return Lists;
};