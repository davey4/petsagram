const Router = require("express").Router();
const controller = require("../controllers/UserController");
const { readToken, verifyJwt } = require("../middleware");

Router.get("/user/name/:user_id", controller.getUserName);
Router.get("/:user_id", controller.GetUser);
Router.get("/name/:user_name", controller.GetUserByName);

Router.post("/follow/:user_id/:user_following_id", controller.FollowUser);
Router.delete("/unfollow/:user_id/:user_following_id", controller.UnfollowUser);

Router.get("/followers/:following_id", controller.GetFollowers);
Router.get("/following/:user_id", controller.GetFollowing);

Router.post("/register", controller.CreateUser);
Router.post("/login", controller.LoginUser);
Router.get("/refresh/session", readToken, verifyJwt, controller.RefreshSession);

module.exports = Router;
