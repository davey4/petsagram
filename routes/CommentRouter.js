const Router = require("express").Router();
const controller = require("../controllers/CommentController");

Router.post("/:user_id/post/:post_id", controller.CreateComment);
Router.get("/view/:post_id", controller.GetComments);
Router.delete("/:comment_id", controller.DeleteComment);
Router.put("/like/:comment_id", controller.LikeComment);
Router.put("/unlike/:comment_id", controller.UnlikeComment);

module.exports = Router;
