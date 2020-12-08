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
      setPosts(data[0]);
      //   console.log(posts[0]);
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="center">
      {posts
        ? posts.map((element) => (
            <div
              key={element.id}
              // onClick={() => goToProfile(element.user_id)}
            >
              <Posts
                img={element.image}
                userName={element.User.user_name}
                description={element.description}
                post={element}
                currentUser={props.currentUser}
              />
            </div>
          ))
        : null}
    </section>
  );
};

export default Feed;
