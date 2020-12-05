import React, { useEffect, useState } from "react";

export default (props) => {
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
