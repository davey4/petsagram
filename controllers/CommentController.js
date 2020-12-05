const { Comment } = require("../models");

const CreateComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      ...req.body,
      userId: req.body.user_id,
      postId: req.body.post_id,
    });
    res.send(comment);
  } catch (error) {
    throw error;
  }
};

const GetComments = async (req, res) => {
  try {
    const comment = await Comment.findOne({
      where: { post_id: req.params.post_id },
    });
    res.send(comment);
  } catch (error) {
    throw error;
  }
};

const UpdateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id);
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true,
    });
    res.send(updatedComment);
  } catch (error) {
    throw error;
  }
};

const DeleteComment = async (req, res) => {
  try {
    await Comment.destroy({
      where: { id: req.params.comment_id },
    });
    res.send({ message: `Comment #${req.params.comment_id} deleted.` });
  } catch (error) {
    throw error;
  }
};

const LikeComment = async (req, res) => {
  try {
    const like = await Comment.increment(
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
    const unlike = await Comment.increment(
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