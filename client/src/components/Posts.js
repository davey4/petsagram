import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import TextInput from "./TextInput";
import { __CreateComment, __GetComments } from "../services/CommentService";

const Posts = (props) => {
  const [comments, setComments] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [description, setDescription] = useState("");
  const [createComment, setCreateComment] = useState(false);
  const [likes, setLikes] = useState([]);
  // console.log(props.post.id);

  useEffect(() => {
    setComments(props.post.Comments);
    console.log(props.post.Likes);
    setLikes(props.post.Likes);
  }, []);

  const handleCommentChange = ({ target }) => {
    setDescription(target.value);
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    const newComment = { description: description };
    try {
      await __CreateComment(props.currentUser, props.post.id, newComment);
    } catch (error) {
      throw error;
    }
  };

  const displayLikes = () => {
    if (likes.length === 0) {
      return <div>0 likes</div>;
    } else if (likes.length === 1) {
      return <div>`${likes[0]} likes this`</div>;
    } else if (likes.length === 2) {
      return (
        <div>
          `${likes[0]} and ${likes[1]} like this`
        </div>
      );
    } else {
      return (
        <div>
          `${likes[0]} and ${likes.length - 1} others like this`
        </div>
      );
    }
  };

  return (
    <section>
      <div>
        <div>{props.userName}</div>
        <img src={props.img} alt="post" />
        <div>{props.description}</div>
      </div>
      <div>
        <button>Like</button>
        {displayLikes}
        <button onClick={() => setClicked(!clicked)}>Comments</button>
        <button onClick={() => setCreateComment(!createComment)}>
          Add Comment
        </button>
      </div>
      {createComment ? (
        <form onSubmit={handleAddComment}>
          <TextInput
            type="text"
            name="description"
            value={description}
            onChange={handleCommentChange}
            placeholder="add comment"
          />
          <button>comment</button>
        </form>
      ) : null}
      {clicked && comments
        ? comments.map((element) => (
            <div id={element.id}>
              <Comment
                commentor={element.User.user_name}
                description={element.description}
                postid={props.postId}
                currentUser={props.currentUser}
              />
            </div>
          ))
        : null}
    </section>
  );
};

export default Posts;
