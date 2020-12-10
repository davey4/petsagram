import React, { useEffect, useState } from "react";
import { __GetUser } from "../services/UserService";
import {
  __DeleteNotification,
  __GetNotifications,
} from "../services/NotificationService";
import Notification from "../components/Notification";

const Notifications = (props) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const user = await __GetUser(props.currentUser);
      setNotifications(user.Notifications);
    } catch (error) {
      throw error;
    }
  };

  const handleDelete = async (id) => {
    try {
      await __DeleteNotification(id);
      const data = await __GetNotifications(props.currentUser);
      setNotifications(data);
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="notifications">
      <h1 className="heading">Notifications</h1>
      {notifications.length > 0 ? (
        notifications.map((element) => (
          <div className="notifs" key={element.id}>
            <Notification
              message={element.message}
              id={element.id}
              onClick={handleDelete}
            />
          </div>
        ))
      ) : (
        <h1 className="heading">No New Notifications</h1>
      )}
    </section>
  );
};

export default Notifications;
