"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.User, {
        as: "followers",
        through: models.Followers,
        foreignKey: "following_id",
      });

      User.belongsToMany(models.User, {
        as: "following",
        through: models.Followers,
        foreignKey: "user_id",
      });

      User.hasMany(models.Post, {
        foreignKey: "user_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });

      User.hasMany(models.Comments, {
        foreignKey: "user_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });

      User.hasMany(models.Likes, {
        foreignKey: "user_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      User.hasMany(models.Notifications, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password_digest: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
//referencing
