import React, { useEffect, useState } from "react";
import { Button, TextField } from "react-md";
import Uploader from "../components/Uploader";
import "../styles/Posts.css";
import { __CreatePost, __UpdatePost } from "../services/PostService";
import { __GetUserName } from "../services/UserService";

const CreatePost = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    getUser();
    if (props.location.state) {
      setImage(props.location.state.image);
      setDescription(props.location.state.description);
      setId(props.location.state.id);
    }
  }, []);

  const getUser = async () => {
    const user = await __GetUserName(props.currentUser);
    setName(user.user_name);
  };

  const createPost = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        const data = { image, description };
        await __UpdatePost(data, id);
        props.history.push("/profile");
      } catch (error) {
        throw error;
      }
    }
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
    <section className="create-post">
          <h4>{name}</h4>
      <div className="create-section">
        <div className="create">
          <div className="uploader">
            <Uploader setImage={handleImage} text="Upload Image" />
            {image ? <img src={image} alt="cloudinary" /> : null}
          </div>
          <form className="create-form" onSubmit={createPost}>
            <TextField
              type="text"
              name="description"
              value={description}
              onChange={handleDescription}
              placeholder="Description"
            />
          </form>
          <div className="post-button">
            <Button type="submit" theme="secondary" themeType="contained">
              Post
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
