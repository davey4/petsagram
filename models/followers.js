"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Followers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Followers.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Followers.belongsTo(models.Following, {
        foreignKey: "following_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Followers.init(
    {
      user_id: DataTypes.INTEGER,
      following_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Followers",
      tableName: "followers",
    }
  );
  return Followers;
};