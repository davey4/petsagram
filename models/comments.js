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
};
Comments.init(
  {
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    post_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "posts",
        key: "id",
      },
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Comments",
    tableName: "comments",
  }
);
return Comments;
