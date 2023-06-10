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
      Lists.hasMany(models.Todos, {
        foreignKey: 'id_list',
        as: 'todos',
        onDelete: 'CASCADE'
      });
      // define association here
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