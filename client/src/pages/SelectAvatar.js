import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "../components/Avatar";

const SetAvatar = (props) => {
  const [avatars, setAvatars] = useState([]);
  console.log(props);

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
    <section>
      <h1>Select an Avatar</h1>
      <div>
        {avatars.map((element, i) => (
          <div key={i} onClick={() => props.setAvatar(avatars[i])}>
            <Avatar img={element} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SetAvatar;
