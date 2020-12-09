import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import { __GetUser } from "../services/UserService";
import { __DeletePost, __GetPostsByUserId } from "../services/PostService";

const UserProfile = (props) => {
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowings] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = await __GetUser(props.currentUser);
    setName(user.user_name);
    setPosts(user.Posts);
    setFollowers(user.followers);
    setFollowings(user.following);
  };

  const deletePost = async (id) => {
    try {
      await __DeletePost(id);
      const posts = await __GetPostsByUserId(props.currentUser);
      setPosts(posts);
    } catch (error) {
      throw error;
    }
  };

  const updatePost = async (post) => {
    try {
      let location = {
        pathname: "/create/post",
        state: post,
      };
      props.history.push(location);
    } catch (error) {
      throw error;
    }
  };

  return (
    <section>
      <h4>{name}'s Profile</h4>
      <h5>
        Followers: {followers.length} Following: {following.length}
      </h5>
      <button
        className="margin-left"
        onClick={() => props.history.push("/create/post")}
      >
        New Post
      </button>
      <div className="center">
        {posts ? (
          posts.map((element) => (
            <div key={element.id}>
              <Posts
                img={element.image}
                userName={name}
                description={element.description}
                post={element}
                currentUser={props.currentUser}
                deletePost={deletePost}
                updatePost={updatePost}
              />
            </div>
          ))
        ) : (
          <h3>User has no posts</h3>
        )}
      </div>
    </section>
  );
};

export default UserProfile;
