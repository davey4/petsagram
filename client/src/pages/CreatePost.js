import React, { useState } from "react";
import Uploader from "../components/Uploader";
import Images from "../components/Images";
import TextInput from "../components/TextInput";
// import e from "express";

const CreatePost = (props) => {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const createPost = (e) => {
    e.preventDefault();
    try {
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
            <button
              type="submit"
              // className="btn  teal darken-4"
            >
              Post
              {/* <i className="material-icons left">delete_sweep</i>Delete All */}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
