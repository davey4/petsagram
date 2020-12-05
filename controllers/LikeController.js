const { Like } = require("../models");

const CreateLike = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id);
    let likeBody = {
      postId,
      ...req.body,
    };
    let like = await Like.create(likeBody);
    res.send(like);
  } catch (error) {
    throw error;
  }
};

const GetLikes = async (req, res) => {
  try {
    const likes = await Like.findOne({
      where: { post_id: req.params.post_id },
    });
    res.send(likes);
  } catch (error) {
    throw error;
  }
};

const DeleteLikes = async (req, res) => {
  try {
    let likeId = parseInt(req.params.like_id);
    await Like.destroy({ where: { id: likeId } });
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
