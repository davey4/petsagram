import React, { useEffect, useState } from "react";
import { TextField } from "react-md";
import Posts from "../components/Posts";
import ViewProfile from "./ViewProfile";
import { __GetAllPostsAndOrderByRecent } from "../services/PostService";

const Explore = (props) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    getRecentPosts();
  }, []);

  const getRecentPosts = async () => {
    try {
      const data = await __GetAllPostsAndOrderByRecent();
      setPosts(data);
    } catch (error) {
      throw error;
    }
  };

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const searchUsers = (e) => {
    e.preventDefault();
    let location = {
      pathname: "/view/profile",
      state: search,
    };
    props.history.push(location);
  };

  const goToProfile = (user) => {
    let location = {
      pathname: "/view/profile",
      state: user,
    };
    props.history.push(location);
  };

  return (
    <section className="explore">
      <h1 className="heading">Explore</h1>
      <div className="searchbar">
        <form className="searchform" onSubmit={searchUsers}>
          <TextField
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="SEARCH USERS"
          />
        </form>
      </div>
      {!searched ? (
        <div className="allposts">
          {posts
            ? posts.map((element) => (
                <div className="post-container" key={element.id}>
                  <Posts
                    img={element.image}
                    userName={element.User.user_name}
                    description={element.description}
                    post={element}
                    currentUser={props.currentUser}
                    name={props.name}
                    goToProfile={goToProfile}
                  />
                </div>
              ))
            : null}
        </div>
      ) : null}
    </section>
  );
};

export default Explore;
