import React, { useEffect, useState } from "react";
import { Button, TextField } from "react-md";
import { FavoriteSVGIcon, SendSVGIcon } from "@react-md/material-icons";
import Comment from "./Comment";
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
import { __CreateNotification } from "../services/NotificationService";
import { __GetUserName } from "../services/UserService";

const Posts = (props) => {
  const [comments, setComments] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [description, setDescription] = useState("");
  const [createComment, setCreateComment] = useState(false);
  const [likes, setLikes] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    setComments(props.post.Comments);
    setLikes(props.post.Likes);
    getUser();
  }, []);

  const getUser = async () => {
    const user = await __GetUserName(props.currentUser);
    setName(user.user_name);
  };

  const createNotification = async (message) => {
    try {
      const newMessage = { message: message };
      await __CreateNotification(props.post.User.id, newMessage);
    } catch (error) {
      throw error;
    }
  };

  const addLike = async (e) => {
    e.preventDefault();
    try {
      await __CreateLike(props.currentUser, props.post.id);
      const likes = await __GetLikes(props.post.id);
      setLikes(likes);
      let message = `${name} liked your post!`;
      createNotification(message);
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
      let message = `${name} commented on your post!`;
      createNotification(message);
    } catch (error) {
      throw error;
    }
  };

  const handleCommentChange = ({ target }) => {
    setDescription(target.value);
  };

  return (
    <div className="posts">
      <div className="postinfo">
        <div className="name">{props.userName}</div>
        <img src={props.img} alt="post" />
        <div className="description">{props.description}</div>
        {props.deletePost ? (
          <Button
            theme="primary"
            themeType="contained"
            onClick={() => props.deletePost(props.post.id)}
          >
            Delete Post
          </Button>
        ) : null}

        <div className="likes">
          {likes.find((element) => element.User.id === props.currentUser) ? (
            <Button
              theme="secondary"
              themeType="contained"
              id="icon-button-1"
              buttonType="icon"
              onClick={unLike}
            >
              <FavoriteSVGIcon>Unlike</FavoriteSVGIcon>
            </Button>
          ) : (
            <Button
              theme="primary"
              themeType="contained"
              id="icon-button-1"
              buttonType="icon"
              onClick={addLike}
            >
              <FavoriteSVGIcon>Like</FavoriteSVGIcon>
            </Button>
          )}
          {likes.length === 0 && <div>0 likes</div>}
          {likes.length === 1 && (
            <div>{likes[0].User.user_name} likes this</div>
          )}
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
        </div>
        <div className="comments-button">
          <Button
            theme="primary"
            themeType="contained"
            onClick={() => setClicked(!clicked)}
          >
            Comments
          </Button>
          <Button
            theme="primary"
            themeType="contained"
            onClick={() => setCreateComment(!createComment)}
          >
            Add Comment
          </Button>
        </div>
        {createComment ? (
          <form className="comment-form" onSubmit={handleAddComment}>
            <TextField
              type="text"
              name="description"
              value={description}
              onChange={handleCommentChange}
              placeholder="Comment"
            />
            <Button theme="primary" themeType="contained" type="submit">
              <SendSVGIcon>Submit</SendSVGIcon>
            </Button>
          </form>
        ) : null}
        {clicked && comments
          ? comments.map((element) => (
              <div className="comments" key={element.id}>
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
      </div>
    </div>
  );
};

export default Posts;
