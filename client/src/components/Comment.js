import React, { useEffect, useState } from "react";

const Comment = (props) => {
  const [commentor, setCommentor] = useState("");

  useEffect(() => {
    // getUser
  }, []);

  return (
    <section>
      <div>
        {commentor}: {props.description}
      </div>
    </section>
  );
};

export default Comment;
