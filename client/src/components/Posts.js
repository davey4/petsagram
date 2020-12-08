import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import TextInput from "./TextInput";
import {
  __CreateComment,
  __GetComments,
  __DeleteComment,
} from "../services/CommentService";
import {
  __CreateLike,
  __DeleteLikes,
  __GetLikes,
} from "../services/LikeService";

const Posts = (props) => {
  const [comments, setComments] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [description, setDescription] = useState("");
  const [createComment, setCreateComment] = useState(false);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    setComments(props.post.Comments);
    setLikes(props.post.Likes);
  }, []);

  const handleCommentChange = ({ target }) => {
    setDescription(target.value);
  };

  const addLike = async (e) => {
    e.preventDefault();
    try {
      await __CreateLike(props.currentUser, props.post.id);
      const likes = await __GetLikes(props.post.id);
      setLikes(likes);
    } catch (error) {
      throw error;
    }
  };

  const unLike = async (e) => {
    e.preventDefault();
    let id;
    likes.find((element) => {
      if (element.User.id === props.currentUser) {
        id = element.id;
      }
    });
    try {
      await __DeleteLikes(id);
      const likes = await __GetLikes(props.post.id);
      setLikes(likes);
    } catch (error) {
      throw error;
    }
  };

  const deleteComment = async (id) => {
    // e.preventDefault()
    try {
      await __DeleteComment(id);
      const comments = await __GetComments(props.post.id);
      setComments(comments);
    } catch (error) {
      throw error;
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    const newComment = { description: description };
    try {
      await __CreateComment(props.currentUser, props.post.id, newComment);
      const comments = await __GetComments(props.post.id);
      setComments(comments);
      setDescription("");
      setCreateComment(!createComment);
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
        {props.deletePost ? (
          <button onClick={() => props.deletePost(props.post.id)}>
            Delete Post
          </button>
        ) : null}
      </div>
      <div>
        {likes.find((element) => element.User.id === props.currentUser) ? (
          <button onClick={unLike}>UnLike</button>
        ) : (
          <button onClick={addLike}>Like</button>
        )}
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
            <div key={element.id}>
              <Comment
                commentor={element.User.user_name}
                description={element.description}
                comment={element}
                currentUser={props.currentUser}
                onClick={deleteComment}
              />
            </div>
          ))
        : null}
    </section>
  );
};

export default Posts;
