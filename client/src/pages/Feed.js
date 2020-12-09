import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import { __GetPostsOfUserFollowings } from "../services/PostService";

const Feed = (props) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const data = await __GetPostsOfUserFollowings(props.currentUser);
      setPosts(data);
    } catch (error) {
      throw error;
    }
  };

  const goToProfile = (user) => {
    let location = {
      pathname: "/view/profile",
      state: user,
    };
    props.history.push(location);
  };

  return (
    <div className="feed">
      <div className="feed-posts">
        {posts ? (
          posts.map((element) => (
            <div className="posts" key={element.id}>
              <Posts
                img={element.image}
                userName={element.User.user_name}
                description={element.description}
                post={element}
                currentUser={props.currentUser}
                goToProfile={goToProfile}
              />
            </div>
          ))
        ) : (
          <h3>No Posts</h3>
        )}
      </div>
    </div>
  );
};

export default Feed;
