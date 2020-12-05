import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";

const UserProfile = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // getPostsByUser()
  }, []);

  return (
    <section>
      <h4>{props.currentUser}'s Profile</h4>
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

export default UserProfile;
