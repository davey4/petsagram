import React, { useEffect, useState } from "react";
import Uploader from "../components/Uploader";
import TextInput from "../components/TextInput";
import "../styles/Posts.css";
import { __CreatePost } from "../services/PostService";
import { __GetUserName } from "../services/UserService";

const CreatePost = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    const user = await __GetUserName(props.currentUser);
    setName(user.user_name);
  };

  const createPost = async (e) => {
    e.preventDefault();
    try {
      const data = { image, description };
      await __CreatePost(data, props.currentUser);
      props.history.push("/profile");
    } catch (error) {
      throw error;
    }
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleImage = (target) => {
    setImage(target);
  };

  return (
    <section>
      <h4>{name}</h4>
      <div className="center">
        <div className="pic-buttons">
          <Uploader setImage={handleImage} />
          {image ? <img src={image} alt="cloudinary" /> : null}
          <form onSubmit={createPost}>
            <TextInput
              type="text"
              name="description"
              value={description}
              onChange={handleDescription}
              placeholder="Caption"
            />

            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
