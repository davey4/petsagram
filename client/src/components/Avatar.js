import React, { useState } from "react";

const Avatar = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <div onClick={() => setSelected(!selected)}>
      <img
        className={selected ? "the-avatar selected" : "the-avatar"}
        src={props.img}
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
