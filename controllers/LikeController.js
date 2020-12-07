const { User, Likes } = require("../models");
//working
const CreateLike = async (req, res) => {
  try {
    let like_id = parseInt(req.params.like_id);
    let user_id = parseInt(req.params.user_id);
    let post_id = parseInt(req.params.post_id);
    let likeBody = { like_id, user_id, post_id };
    const like = await Likes.create(likeBody);
    res.send(like);
  } catch (error) {
    throw error;
  }
};
//working
const GetLikes = async (req, res) => {
  try {
    const likes = await Likes.findAll({
      where: { post_id: req.params.post_id },
      include: [{ model: User, attributes: ["id", "name", "user_name"] }],
    });
    res.send(likes);
  } catch (error) {
    throw error;
  }
};
//working
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
