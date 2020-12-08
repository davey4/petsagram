const { User, Post, Comments, Likes, Followers } = require("../models");
// working
const CreatePost = async (req, res) => {
  try {
    let user_id = parseInt(req.params.user_id);
    let image = req.body.image;
    let description = req.body.description;
    let postBody = { user_id, image, description };
    let post = await Post.create(postBody);
    res.send(post);
  } catch (error) {
    throw error;
  }
};
// working
const GetAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, attributes: ["id", "name", "user_name"] },
        { model: Comments },
        { model: Likes },
      ],
    });
    res.send(posts);
  } catch (error) {
    throw error;
  }
};
// working
const GetPostsByUserId = async (req, res) => {
  try {
    const post = await Post.findAll({
      order: [["createdAt", "DESC"]],
      where: { user_id: req.params.user_id },
      include: [
        { model: User, attributes: ["id", "name", "user_name"] },
        { model: Comments },
        { model: Likes },
      ],
    });
    res.send(post);
  } catch (error) {
    throw error;
  }
};
// working
const GetAllPostsAndOrderByRecent = async (req, res) => {
  try {
    const recents = await Post.findAll({
      order: [["createdAt", "DESC"]],
      include: [
        { model: User, attributes: ["id", "name", "user_name"] },
        {
          model: Comments,
          include: [{ model: User, attributes: ["user_name"] }],
        },
        { model: Likes, include: [{ model: User, attributes: ["user_name"] }] },
      ],
    });
    res.send(recents);
  } catch (error) {
    throw error;
  }
};
// working
const GetPostsOfUserFollowings = async (req, res) => {
  try {
    const following = await Followers.findAll({
      where: { user_id: req.params.user_id },
      include: [
        {
          model: User,
          as: "following",
          attributes: ["id"],
        },
      ],
    });
    const posts = [];
    for (let i = 0; i < following.length; i++) {
      let userId = following[i].following.id;
      const post = await Post.findAll({
        where: { user_id: userId },
      });
      posts.push(post);
    }
    res.send(posts);
  } catch (error) {
    throw error;
  }
};
//working
const UpdatePost = async (req, res) => {
  try {
    let post_id = parseInt(req.params.post_id);
    let image = req.body.image;
    let description = req.body.description;
    let postBody = { post_id, image, description };
    let updatedPost = await Post.update(postBody, {
      where: { id: post_id },
      returning: true,
    });
    res.send(updatedPost);
  } catch (error) {
    throw error;
  }
};
//working
const DeletePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id);
    await Post.destroy({ where: { id: postId } });
    res.send({ message: `Post #${postId} deleted.` });
  } catch (error) {
    throw error;
  }
};

const LikePost = async (req, res) => {
  try {
    const like = await Post.increment(
      { likes: 1 },
      { where: { id: req.params.post_id } }
    );
    res.send(like);
  } catch (error) {
    throw error;
  }
};

const UnlikePost = async (req, res) => {
  try {
    const unlike = await Post.increment(
      { likes: -1 },
      { where: { id: req.params.post_id } }
    );
    res.send(unlike);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreatePost,
  GetAllPosts,
  GetPostsByUserId,
  GetAllPostsAndOrderByRecent,
  GetPostsOfUserFollowings,
  UpdatePost,
  DeletePost,
  LikePost,
  UnlikePost,
};
