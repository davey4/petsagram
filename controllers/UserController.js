const { User, Post, Follower } = require("../models");

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    throw error;
  }
};

const GetUser = async (req, res) => {
  try {
    const user = await User.findbyPk(req.params.user_id, {
      include: [
        { model: Post, as: "posts" },
        { model: User, as: "followers" },
        { model: User, as: "following" },
      ],
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const FollowUser = async (req, res) => {
  try {
    const followers = await Follower.create({
      user_id: req.params.user_id,
      follower_id: req.params.user_following_id,
    });
    res.send(followers);
  } catch (error) {
    throw error;
  }
};

const UnfollowUser = async (req, res) => {
  try {
    await Follower.destroy({
      where: {
        user_id: req.params.user_following_id,
        follower_id: req.params.user_id,
      },
    });
    res.send({
      message: `${req.params.user_id} unfollowed ${req.params.user_following_id}`,
    });
  } catch (error) {
    throw error;
  }
};

const GetFollowers = async (req, res) => {
  try {
    const followers = await Follower.findAll({
      where: { following_id: req.params.following_id },
    });
    res.send(followers);
  } catch (error) {
    throw error;
  }
};

const GetFollowing = async (req, res) => {
  try {
    const following = await Follower.findAll({
      where: { user_id: req.params.user_id },
    });
    res.send(following);
  } catch (error) {
    throw error;
  }
};

const CreateUser = async (req, res) => {
  try {
    const { name, email, user_name, password_digest } = req.body;
    const user = await User.create({ name, email, user_name, password_digest });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const LoginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (user && req.body.password_digest === user.password_digest) {
      const payload = {
        _id: user.id,
      };
      res.locals.payload = payload;
      return next();
    }
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const RefreshSession = async (req, res) => {
  try {
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllUsers,
  GetUser,
  FollowUser,
  UnfollowUser,
  GetFollowers,
  GetFollowing,
  CreateUser,
  LoginUser,
  RefreshSession,
};
