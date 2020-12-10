import React, { useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import { __GetAvatars } from "../services/UserService";

const SetAvatar = (props) => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    getAvatars();
  }, []);

  const getAvatars = async () => {
    const response = await __GetAvatars();
    setAvatars(response);
  };

  return (
    <section>
      <h1>Select an Avatar</h1>
      <button onClick={props.onSubmit}>Set Avatar</button>
      <div>
        {avatars.map((element, i) => (
          <div key={i} onClick={() => props.setAvatar(element.avatar)}>
            <Avatar img={element.avatar} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SetAvatar;
