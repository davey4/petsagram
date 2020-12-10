import React, { useEffect, useState } from "react";
import { Button } from "react-md";
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
    <section class="select-avatar">
      <div className="choose-avatar">
        {avatars.map((element, i) => (
          <div className="allavatars" key={i} onClick={() => props.setAvatar(element.avatar)}>
            <Avatar img={element.avatar} />
          </div>
        ))}
      </div>
      <div className="set-avatar-button">
        <Button theme="primary" themeType="contained" onClick={props.onSubmit}>
          Choose Avatar
        </Button>
      </div>
    </section>
  );
};

export default SetAvatar;
