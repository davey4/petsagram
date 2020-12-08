const { Notifications } = require("../models");

const CreateNotification = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const message = req.body.message;
    let body = { user_id, message };
    const notification = await Notifications.create(body);
    res.send(notification);
  } catch (error) {
    throw error;
  }
};

const GetNotifications = async (req, res) => {
  try {
    const notifications = await Notifications.findAll({
      where: { user_id: req.params.user_id },
    });
    res.send(notifications);
  } catch (error) {
    throw error;
  }
};

const DeleteNotification = async (req, res) => {
  try {
    await Notifications.destroy({
      where: { id: parseInt(req.params.id) },
    });
    res.send({ msg: `deleted notification ${req.params.id}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateNotification,
  GetNotifications,
  DeleteNotification,
};
