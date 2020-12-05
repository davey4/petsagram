const Router = require("express").Router();
const controller = require("../controllers/UserController");

Router.get("/allusers", controller.GetAllUsers);
Router.get("/:user_id", controller.GetUser);

Router.put("/follow/:user_id/:user_following_id", controller.FollowUser);
Router.put("/unfollow/:user_id/:user_following_id", controller.UnfollowUser);

Router.get("/followers/:following_id", controller.GetFollowers);
Router.get("/following/:user_id", controller.GetFollowing);

Router.post("/register", controller.CreateUser);
Router.post("/login", controller.LoginUser);
Router.get("/refresh/session", controller.RefreshSession);

module.exports = Router;
