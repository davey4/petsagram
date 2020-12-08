import React, { useEffect, useState } from "react";

const Comment = (props) => {
  console.log(props);
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
