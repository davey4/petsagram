import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import TextInput from "../components/TextInput";
import { __GetAllPostsAndOrderByRecent } from "../services/PostService";

const Explore = (props) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecentPosts();
  }, []);

  const getRecentPosts = async () => {
    try {
      const data = await __GetAllPostsAndOrderByRecent();
      console.log(data);
      setPosts(data);
    } catch (error) {
      throw error;
    }
  };

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const goToProfile = (user) => {
    // console.log(user)
    // props.history.push(`/profile/${user}`)
  };

  return (
    <section className="center">
      <div>
        <form>
          <TextInput
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="SEARCH USERS"
          />
        </form>
      </div>
      {posts
        ? posts.map((element) => (
            <div key={element.id} onClick={() => goToProfile(element.user_id)}>
              <Posts
                img={element.image}
                userName={element.userName}
                description={element.description}
                postId={element.id}
                currentUser={props.currentUser}
              />
            </div>
          ))
        : null}
    </section>
  );
};

export default Explore;
