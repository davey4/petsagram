"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comments.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });

      Comments.belongsTo(models.Post, {
        foreignKey: "post_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Comments.init(
    {
      description: DataTypes.STRING,
      post_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comments",
      tableName: "comments",
    }
  );
  return Comments;
};
