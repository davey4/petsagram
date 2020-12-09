import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "../components/Avatar";

const SetAvatar = (props) => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    getAvatars();
  }, []);

  const getAvatars = async () => {};

  return (
    <section>
      <div>avatars</div>
    </section>
  );
};

export default SetAvatar;
