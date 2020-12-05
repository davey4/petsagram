const Router = require("express").Router();
const UserRouter = require("../routes/UserRouter");
const PostRouter = require("../routes/PostRouter");
const CommentRouter = require("../routes/CommentRouter");
const LikeRouter = require("../routes/LikeRouter");

Router.use("/users", UserRouter);
Router.use("/posts", PostRouter);
Router.use("/comments", CommentRouter);
Router.use("/likes", LikeRouter);

module.exports = Router;
