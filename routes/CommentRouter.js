const Router = require("express").Router();
const controller = require("../controllers/CommentController");

Router.post("/:user_id/post/:post_id", controller.CreateComment);
Router.get("/view/:post_id", controller.GetComments);
Router.delete("/:comment_id", controller.DeleteComment);

module.exports = Router;
