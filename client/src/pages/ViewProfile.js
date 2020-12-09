import React, { useEffect, useState } from "react";
import { Button } from "react-md";
import Posts from "../components/Posts";
import {
  __GetUserByName,
  __FollowUser,
  __UnfollowUser,
  __GetUserName,
} from "../services/UserService";
import { __CreateNotification } from "../services/NotificationService";

const ViewProfile = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowings] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getUser();
    getCurrentUserName();
  }, []);

  const getCurrentUserName = async () => {
    const user = await __GetUserName(props.currentUser);
    setUserName(user.user_name);
  };

  const getUser = async () => {
    try {
      const data = await __GetUserByName(props.location.state);
      setId(data.id);
      setName(data.user_name);
      setPosts(data.Posts);
      setFollowers(data.followers);
      setFollowings(data.following);
    } catch (error) {
      throw error;
    }
  };

  const createNotification = async (message) => {
    try {
      const newMessage = { message: message };
      await __CreateNotification(id, newMessage);
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
      let message = `${userName} started following you!`;
      createNotification(message);
      getUser();
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="viewprofile">
      <div>
        {name ? (
          <div>
            <h4>{name}</h4>
            <h5>
              Followers: {followers.length} Following: {following.length}
            </h5>
            {followers.find((element) => element.id === props.currentUser) ? (
              <Button
                className="unfollow"
                theme="primary"
                themeType="contained"
                onClick={handleUnfollow}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                className="follow"
                theme="primary"
                themeType="contained"
                onClick={handleFollow}
              >
                Follow
              </Button>
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
