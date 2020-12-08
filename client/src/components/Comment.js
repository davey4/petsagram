import React, { useEffect, useState } from "react";

const Comment = (props) => {
  return (
    <section>
      <div>
        {props.commentor}: {props.description}
      </div>
    </section>
  );
};

export default Comment;
