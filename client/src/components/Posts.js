import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import TextInput from "./TextInput";

export default (props) => {
  const [comments, setComments] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [addComment, setAddComment] = useState("");
  const [createComment, setCreateComment] = useState(false);

  useEffect(() => {
    // getComments()
  }, []);

  const handleGetComments = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  const handleCommentChange = ({ target }) => {
    setAddComment(target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    try {
      //   createComment(addComment)
    } catch (error) {
      throw error;
    }
  };

  return (
    <section>
      <div>
        <div>{props.userName}</div>
        <img src={props.img} alt="image" />
        <div>{props.description}</div>
      </div>
      <div>
        <button onClick={handleGetComments}>Comments</button>
        <button onClick={() => setCreateComment(true)}>Add Comment</button>
      </div>
      {createComment ? (
        <form onSubmit={handleAddComment}>
          <TextInput
            type="text"
            name="comment"
            value={addComment}
            onChange={handleCommentChange}
            placeholder="add comment"
          />
          <button>comment</button>
        </form>
      ) : null}
      {clicked
        ? comments.map((element) => (
            <div id={element.id}>
              <Comment
                commentor={element.id}
                description={element.desccription}
                postid={props.postId}
                currentUser={props.currentUser}
              />
            </div>
          ))
        : null}
    </section>
  );
};
