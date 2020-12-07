const Router = require("express").Router();
const controller = require("../controllers/LikeController");

Router.post("/create/:post_id/:user_id", controller.CreateLike);
Router.get("/getlikes/:post_id", controller.GetLikes);
Router.delete("/:like_id", controller.DeleteLikes);

module.exports = Router;
