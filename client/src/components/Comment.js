import React from "react";

const Comment = (props) => {
  return (
    <section>
      <div>
        {props.commentor}: {props.description}
        {props.currentUser === props.comment.user_id ? (
          <button onClick={() => props.onClick(props.comment.id)}>
            delete comment
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default Comment;
