import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import {
  __GetUserByName,
  __FollowUser,
  __UnfollowUser,
} from "../services/UserService";

const ViewProfile = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowings] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      console.log(props.userName);
      const data = await __GetUserByName(props.userName);
      // console.log(data);
      setId(data.id);
      setName(data.user_name);
      setPosts(data.Posts);
      setFollowers(data.followers);
      setFollowings(data.following);
    } catch (error) {
      throw error;
    }
  };

  const handleUnfollow = async (e) => {
    e.preventDefault();
    try {
      await __UnfollowUser(id, props.currentUser);
      getUser();
    } catch (error) {
      throw error;
    }
  };

  const handleFollow = async (e) => {
    e.preventDefault();
    try {
      await __FollowUser(props.currentUser, id);
      getUser();
    } catch (error) {
      throw error;
    }
  };

  return (
    <section>
      <div>
        {name ? (
          <div>
            <h4>{name}</h4>
            <h5>
              Followers: {followers.length} Following: {following.length}
            </h5>
            {followers.find((element) => element.id === props.currentUser) ? (
              <button className="margin-left" onClick={handleUnfollow}>
                Unfollow
              </button>
            ) : (
              <button className="margin-left" onClick={handleFollow}>
                Follow
              </button>
            )}
          </div>
        ) : (
          <h3>User not found!</h3>
        )}
      </div>
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

export default ViewProfile;
