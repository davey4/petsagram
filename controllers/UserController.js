const { User, Post, Followers } = require("../models");
const {
  hashPassword,
  passwordValid,
  createToken,
} = require("../middleware/index");

// working
const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    throw error;
  }
};

const GetUserByName = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { user_name: req.params.user_name },
      include: [
        { model: Post },
        { model: User, as: "followers" },
        { model: User, as: "following" },
      ],
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

// working
const GetUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_id, {
      include: [
        { model: Post },
        { model: User, as: "followers" },
        { model: User, as: "following" },
      ],
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};
// working
const FollowUser = async (req, res) => {
  const user_id = req.params.user_id;
  const following_id = req.params.user_following_id;
  try {
    const followers = await Followers.create({
      user_id,
      following_id,
    });
    res.send(followers);
  } catch (error) {
    throw error;
  }
};
// working
const UnfollowUser = async (req, res) => {
  try {
    await Followers.destroy({
      where: {
        user_id: req.params.user_following_id,
        following_id: req.params.user_id,
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
    const followers = await Followers.findAll({
      where: { following_id: req.params.following_id },
      include: [
        { model: User, as: "user", attributes: ["id", "name", "user_name"] },
      ],
    });
    res.send(followers);
  } catch (error) {
    throw error;
  }
};

const GetFollowing = async (req, res) => {
  try {
    const following = await Followers.findAll({
      where: { user_id: req.params.user_id },
      include: [
        { model: User, as: "user", attributes: ["id", "name", "user_name"] },
      ],
    });
    res.send(following);
  } catch (error) {
    throw error;
  }
};
// working
const CreateUser = async (req, res) => {
  try {
    const { name, email, user_name, password_digest } = req.body;
    // const user_name = userName;
    // const password_digest = await hashPassword(password);
    const user = await User.create({ name, email, user_name, password_digest });
    res.send(user);
  } catch (error) {
    throw error;
  }
};
// working
const LoginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true,
    });
    if (
      user &&
      (await passwordValid(req.body.password, user.password_digest))
    ) {
      let payload = {
        id: user.id,
        name: user.name,
      };
      let token = createToken(payload);
      return res.send({ user, token });
    }
  } catch (error) {
    throw error;
  }
};
// working
const RefreshSession = async (req, res) => {
  try {
    const { token } = res.locals;
    const user = await User.findByPk(token.id, {
      attributes: ["id"], // Find a user by the id encoded in the json web token, only include the id, name and email fields
    });
    res.send({ user, status: "OK" });
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
  GetUserByName,
};
