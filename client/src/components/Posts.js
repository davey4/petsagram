import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import TextInput from "./TextInput";
import { __CreateComment, __GetComments } from "../services/CommentService";
// import { like } from "sequelize/types/lib/operators";

const Posts = (props) => {
  const [comments, setComments] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [description, setDescription] = useState("");
  const [createComment, setCreateComment] = useState(false);
  const [likes, setLikes] = useState([]);
  // console.log(props.post.id);

  useEffect(() => {
    setComments(props.post.Comments);
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

  return (
    <section>
      <div>
        <div>{props.userName}</div>
        <img src={props.img} alt="post" />
        <div>{props.description}</div>
      </div>
      <div>
        <button>Like</button>
        {likes.length === 0 && <div>0 likes</div>}
        {likes.length === 1 && <div>{likes[0].User.user_name} likes this</div>}
        {likes.length === 2 && (
          <div>
            {likes[0].User.user_name} and {likes[1].User.user_name} like this
          </div>
        )}
        {likes.length > 2 && (
          <div>
            {likes[0].User.user_name} and {likes.length - 1} others like this
          </div>
        )}
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
