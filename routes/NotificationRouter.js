const Router = require("express").Router();
const controller = require("../controllers/NotificationsController");

Router.post("/:user_id", controller.CreateNotification);
Router.get("/:user_id", controller.GetNotifications);
Router.delete("/:id", controller.DeleteNotification);

module.exports = Router;
