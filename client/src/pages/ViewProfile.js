import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";

const ViewProfile = (props) => {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState("");
  const [followers, setFollowers] = useState([]);
  const [following, setFollowings] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      // const data =
      // setProfile(data)
      // getPostsByUser(profile.id)
      getFollowers();
      getFollowing();
    } catch (error) {
      throw error;
    }
  };

  const getPostsByUser = async () => {
    try {
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

  const handleFollow = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      throw error;
    }
  };

  return (
    <section>
      <div>
        <h4>Profile</h4>
        <h5>
          Followers: {followers.length} Following: {following.length}
        </h5>
        <button className="margin-left" onClick={handleFollow}>
          Follow
        </button>
      </div>
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
