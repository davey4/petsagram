import React from "react";
import { Button } from "react-md";
import { ClearSVGIcon } from "@react-md/material-icons";

const Notification = (props) => {
  return (
    <div className="notification-area">
      <div className="notification">
        <div className="notif-message">
          <h4>{props.message}</h4>
        </div>
        <div className="delete-notif-button">
          <Button
            theme="secondary"
            themeType="clear"
            id="icon-button-1"
            buttonType="icon"
            onClick={() => props.onClick(props.id)}
          >
            <ClearSVGIcon>Delete</ClearSVGIcon>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
