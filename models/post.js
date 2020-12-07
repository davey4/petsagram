"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.hasMany(models.Likes, {
        foreignKey: "post_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });

      Post.hasMany(models.Comments, {
        foreignKey: "post_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });

      Post.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Post.init(
    {
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      likes_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "posts",
    }
  );
  return Post;
};
