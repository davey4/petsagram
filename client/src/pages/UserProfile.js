import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import CreatePost from "./CreatePost";

const UserProfile = (props) => {
  const [posts, setPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowings] = useState([]);

  useEffect(() => {
    getPostsByUser();
    getFollowers();
    getFollowing();
  }, []);

  const getPostsByUser = async () => {
    try {
      // const data =
      // setPosts(data)
    } catch (error) {
      throw error;
    }
  };

  const getFollowers = async () => {
    try {
      // const data =
      // setFollowers(data)
    } catch (error) {
      throw error;
    }
  };

  const getFollowing = async () => {
    try {
      // const data =
      // setFollowings(data)
    } catch (error) {
      throw error;
    }
  };

  return (
    <section>
      <h4>{props.currentUser}'s Profile</h4>
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
          <h3>User has no posts</h3>
        )}
      </div>
    </section>
  );
};

export default UserProfile;
