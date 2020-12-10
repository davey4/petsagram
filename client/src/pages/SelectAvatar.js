import React, { useEffect, useState } from "react";
import { Button } from "react-md";
import axios from "axios";
import Avatar from "../components/Avatar";

const SetAvatar = (props) => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    getAvatars();
  }, []);

  const getAvatars = async () => {
    const response = await axios.get(
      "https://serene-woodland-97273.herokuapp.com/api/avatars"
    );
    setAvatars(response.data);
  };

  return (
    <section class="select-avatar">
      <div className="choose-avatar">
        {avatars.map((element, i) => (
          <div
            className="allavatars"
            key={i}
            onClick={() => props.setAvatar(avatars[i])}
          >
            <Avatar img={element} />
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
