import React from "react";
import { Button, ClearSVGIcon } from "react-md";

const Comment = (props) => {
  return (
    <div className="comments-info">
      {props.commentor}: {props.description}
      {props.currentUser === props.comment.user_id ? (
        <Button
          theme="primary"
          themeType="contained"
          onClick={() => props.onClick(props.comment.id)}
        >
          <ClearSVGIcon />
        </Button>
      ) : null}
    </div>
  );
};

export default Comment;
