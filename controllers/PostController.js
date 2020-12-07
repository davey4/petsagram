const { User, Post, Comments } = require("../models");

const CreatePost = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let postBody = { userId, ...req.body };
    let post = await Post.create(postBody);
    res.send(post);
  } catch (error) {
    throw error;
  }
};

const GetAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, as: "user", attributes: ["id", "name", "user_name"] },
        { model: Comments, as: "comments", attributes: [] },
        { model: Likes, as: "likes", attributes: [] },
      ],
    });
    res.send(posts);
  } catch (error) {
    throw error;
  }
};

const GetPostsByUserId = async (req, res) => {
  try {
    const post = await Post.findAll({
      order: [["created_at", "DESC"]],
      where: { user_id: req.params.user_id },
      include: [
        { model: User, as: "user", attributes: ["id", "name", "user_name"] },
        { model: Comments, as: "comments", attributes: [] },
        { model: Likes, as: "likes", attributes: [] },
      ],
    });
    res.send(post);
  } catch (error) {
    throw error;
  }
};

const GetAllPostsAndOrderByRecent = async (req, res) => {
  try {
    const recents = await Post.findAll({
      order: [["created_at", "DESC"]],
      include: [
        { model: User, as: "user", attributes: ["id", "name", "user_name"] },
        { model: Comments, as: "comments", attributes: [] },
        { model: Likes, as: "likes", attributes: [] },
      ],
    });
    res.send(recents);
  } catch (error) {
    throw error;
  }
};

const GetPostsOfUserFollowings = async (req, res) => {
  try {
    const followingPost = await Post.findAll({
      order: [["create_at", "DESC"]],
      where: {
        following_id: req.params.following_id,
      },
      include: [
        { model: User, as: "user", attributes: ["id", "name", "user_name"] },
        { model: Post, as: "posts", attributes: [] },
        { model: Comments, as: "comments", attributes: [] },
      ],
    });
    res.send(followingPost);
  } catch (error) {
    throw error;
  }
};

const UpdatePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id);
    let updatedPost = await Post.update(req.body, {
      where: { id: postId },
      returning: true,
    });
    res.send(updatedPost);
  } catch (error) {
    throw error;
  }
};

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
