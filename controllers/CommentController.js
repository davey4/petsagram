const { User, Comments } = require("../models");
//working
const CreateComment = async (req, res) => {
  try {
    let user_id = parseInt(req.params.user_id);
    let post_id = parseInt(req.params.post_id);
    let description = req.body;
    console.log("body", req.body);
    let commentBody = { user_id, post_id };
    // const comment = await Comments.create(commentBody);
    res.send("comment");
  } catch (error) {
    throw error;
  }
};
//working
const GetComments = async (req, res) => {
  try {
    const comment = await Comments.findAll({
      where: { post_id: req.params.post_id },
      include: [{ model: User, attributes: ["id", "name", "user_name"] }],
    });
    res.send(comment);
  } catch (error) {
    throw error;
  }
};
//working
const UpdateComment = async (req, res) => {
  try {
    let comment_id = parseInt(req.params.comment_id);
    let description = req.body.description;
    let commentBody = { comment_id, description };
    let updatedComment = await Comments.update(commentBody, {
      where: { id: comment_id },
      returning: true,
    });
    res.send(updatedComment);
  } catch (error) {
    throw error;
  }
};
//working
const DeleteComment = async (req, res) => {
  try {
    await Comments.destroy({
      where: { id: req.params.comment_id },
    });
    res.send({ message: `Comment #${req.params.comment_id} deleted.` });
  } catch (error) {
    throw error;
  }
};

const LikeComment = async (req, res) => {
  try {
    const like = await Comments.increment(
      { likes: 1 },
      { where: { id: req.params.comment_id } }
    );
    res.send(like);
  } catch (error) {
    throw error;
  }
};

const UnlikeComment = async (req, res) => {
  try {
    const unlike = await Comments.increment(
      { likes: -1 },
      { where: { id: req.params.comment_id } }
    );
    res.send(unlike);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateComment,
  GetComments,
  UpdateComment,
  DeleteComment,
  LikeComment,
  UnlikeComment,
};
