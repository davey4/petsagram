
const { User, Likes } = require("../models");

const CreateLike = async (req, res) => {
  try {
    const like = await Likes.create({
      user_id: req.params.user_id,
      post_id: req.params.post_id,
    });
    res.send(like);
  } catch (error) {
    throw error;
  }
};

const GetLikes = async (req, res) => {
  try {
    const likes = await Likes.findAll({
      where: { post_id: req.params.post_id },
      include: [
        { model: User, as: "user", attributes: ["id", "name", "user_name"] },
      ],
    });
    res.send(likes);
  } catch (error) {
    throw error;
  }
};

const DeleteLikes = async (req, res) => {
  try {
    let likeId = parseInt(req.params.like_id);
    await Likes.destroy({ where: { id: likeId } });
    res.send({ message: `Like #${likeId} deleted.` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateLike,
  GetLikes,
  DeleteLikes,
};
