import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";

const ViewProfile = (props) => {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState("");

  useEffect(() => {
    // getUser()
    // getPostsByUser()
  }, []);

  return (
    <section>
      <div className="center">
        {posts.length > 1 ? (
          posts.map((element) => (
            <div key={element.id}>
              <Posts
                img={element.image}
                userName={element.userName}
                descrtiption={element.descrtiption}
                postId={element.postId}
                currentUser={props.currentUser}
              />
            </div>
          ))
        ) : (
          <div>User has no posts</div>
        )}
      </div>
    </section>
  );
};

export default ViewProfile;
