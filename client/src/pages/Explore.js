import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import TextInput from "../components/TextInput";

const Explore = (props) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // getPosts()
  }, []);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <section>
      <div className="center">
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
            <div key={element.id}>
              <Posts
                img={element.image}
                userName={element.userName}
                description={element.description}
                commentId={element.commentId}
                postId={element.postId}
                currentUser={props.currentUser}
              />
            </div>
          ))
        : null}
    </section>
  );
};

export default Explore;
