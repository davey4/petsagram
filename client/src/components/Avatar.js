import React from "react";

const Avatar = (props) => {
  return (
    <div>
      <img className="the-avatar" src={props.img} alt="avatar" />
    </div>
  );
};

export default Avatar;
