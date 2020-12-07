import React, { useState } from "react";
import Uploader from "../components/Uploader";
import Images from "../components/Images";
import TextInput from "../components/TextInput";
import "../styles/Posts.css";
import { __CreatePost } from "../services/PostService";

const CreatePost = (props) => {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const createPost = async (e) => {
    e.preventDefault();
    try {
      const data = { image, description };
      await __CreatePost(data, props.currentUser);
      // props.history.push('/ex')
      console.log("clicked");
    } catch (error) {
      throw error;
    }
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleImage = ({ target }) => {
    setImage(target.value);
  };

  return (
    <section>
      <h4>{props.currentUser}</h4>
      <div className="center">
        <div className="pic-buttons">
          <Uploader setImage={setImage} />
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
