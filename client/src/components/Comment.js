import React from "react";
import { Button, ClearSVGIcon } from "react-md";

const Comment = (props) => {
  return (
    <div className="comments-info">
      <div className="comment">
      <strong>{props.commentor}:</strong>{" "}{props.description}
      </div>
      {props.currentUser === props.comment.user_id ? (
        <div className="delete-comment">
        <Button
          theme="secondary"
          themeType="clear"
          id="icon-button-1"
          buttonType="icon"
          onClick={() => props.onClick(props.comment.id)}
        >
          <ClearSVGIcon />
        </Button>
        </div>
      ) : null}
    </div>
  );
};

export default Comment;
