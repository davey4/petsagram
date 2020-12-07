import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import { __GetUser } from "../services/UserService";

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
      // const data = await __GetUser(user);
      // setProfile(data)
      // getPostsByUser(profile.id)
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
