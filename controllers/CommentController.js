const { User, Comments } = require("../models");
//working
const CreateComment = async (req, res) => {
  try {
    let user_id = parseInt(req.params.user_id);
    let post_id = parseInt(req.params.post_id);
    let description = req.body;
    console.log("body", description);
    let commentBody = {
      user_id: user_id,
      post_id: post_id,
      ...description,
    };
    const comment = await Comments.create(commentBody);
    res.send(comment);
  } catch (error) {
    throw error;
  }
};
//working
const GetComments = async (req, res) => {
  try {
    const comment = await Comments.findAll({
      where: { post_id: req.params.post_id },
      include: [{ model: User, attributes: ["user_name"] }],
    });
    res.send(comment);
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

module.exports = {
  CreateComment,
  GetComments,
  DeleteComment,
};
