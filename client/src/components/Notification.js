import React from "react";

const Notification = (props) => {
  return (
    <div>
      <h3>{props.message}</h3>
      <button onClick={() => props.onClick(props.id)}>Delete</button>
    </div>
  );
};

export default Notification;
