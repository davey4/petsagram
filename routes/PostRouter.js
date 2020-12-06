const Router = require("express").Router();
const controller = require("../controllers/PostController");

Router.post("/:user_id", controller.CreatePost);
Router.get("/viewall", controller.GetAllPosts);
Router.get("/byuser/:user_id", controller.GetPostsByUserId);
Router.get("/recent", controller.GetAllPostsAndOrderByRecent);
Router.get("/:user_id/:following_id/:post_id", controller.GetPostsOfUserFollowings)
Router.put("/:post_id", controller.UpdatePost);
Router.delete("/:post_id", controller.DeletePost);
Router.put("/like/:post_id", controller.LikePost);
Router.put("/unlike/:post_id", controller.UnlikePost);

module.exports = Router;
