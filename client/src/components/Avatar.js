import React, { useState } from "react";

const Avatar = (props) => {
  const [border, setBorder] = useState(false);

  return (
    <div onClick={() => setBorder(!border)}>
      <img
        className={border ? "the-avatar border" : "the-avatar"}
        src={props.img}
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
