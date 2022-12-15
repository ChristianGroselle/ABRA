const { DataTypes } = require("sequelize");
const { DataTypes } = require("sequelize");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FavRecipes extends Model {}

FavRecipes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bulk_data: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shared: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
    upvotes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "favrecipes",
  }
);

module.exports = FavRecipes;
