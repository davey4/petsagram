import React, { useEffect, useState } from "react";
import { Button } from "react-md";
import { FontIcon } from "@react-md/icon";
import Posts from "../components/Posts";
import { Button } from "react-md";
import { FontIcon } from "@react-md/icon";
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
    <section className="profile">
      <div className="profileinfo-section">
        <h2>{name}</h2>
        <h4>Posts: {posts.length}</h4>
        <h4>Followers: {followers.length}</h4>
        <h4>Following: {following.length}</h4>
        <Button
          theme="primary"
          themeType="contained"
          className="margin-left"
          id="icon-button-1"
          buttonType="icon"
          aria-label="Add"
          onClick={() => props.history.push("/create/post")}
        >
          {" "}
          <FontIcon>add</FontIcon>
        </Button>
      </div>
      <div className="post-section">
        {posts ? (
          posts.map((element) => (
            <div className="post-container" key={element.id}>
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
