import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import TextInput from "../components/TextInput";
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
    setSearched(true);
    console.log(search);
  };

  // const goToProfile = (user) => {
  // console.log(user)
  // props.history.push(`/profile/${user}`)
  // };

  return (
    <section className="center">
      {!searched ? (
        <div>
          <div>
            <form onSubmit={searchUsers}>
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
        </div>
      ) : (
        <ViewProfile userName={search} currentUser={props.currentUser} />
      )}
    </section>
  );
};

export default Explore;
