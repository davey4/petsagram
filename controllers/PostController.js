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
const GetPostsByUserId = async (req, res) => {
  try {
    const post = await Post.findAll({
      where: { user_id: req.params.user_id },
      include: [
        { model: User, attributes: ["id", "name", "user_name", "avatar"] },
        {
          model: Comments,
          include: [{ model: User, attributes: ["id", "user_name"] }],
        },
        {
          model: Likes,
          include: [{ model: User, attributes: ["id", "user_name"] }],
        },
      ],
      order: [[{ model: Post }, "createdAt", "DESC"]],
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
        { model: User, attributes: ["id", "name", "user_name", "avatar"] },
        {
          model: Comments,
          include: [{ model: User, attributes: ["id", "user_name"] }],
        },
        {
          model: Likes,
          include: [{ model: User, attributes: ["id", "user_name"] }],
        },
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
    let sentPosts;
    let posts = [];
    for (let i = 0; i < following.length; i++) {
      let userId = following[i].following.id;
      const post = await Post.findAll({
        where: { user_id: userId },
        include: [
          { model: User, attributes: ["id", "name", "user_name", "avatar"] },
          {
            model: Comments,
            include: [{ model: User, attributes: ["id", "user_name"] }],
          },
          {
            model: Likes,
            include: [{ model: User, attributes: ["id", "user_name"] }],
          },
        ],
      });
      post.length > 0 ? (posts = posts.concat(post)) : null;
    }
    res.send(
      posts.sort((a, b) => {
        let c = new Date(a.createdAt);
        let d = new Date(b.createdAt);
        return d - c;
      })
    );
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

module.exports = {
  CreatePost,
  GetPostsByUserId,
  GetAllPostsAndOrderByRecent,
  GetPostsOfUserFollowings,
  UpdatePost,
  DeletePost,
};
