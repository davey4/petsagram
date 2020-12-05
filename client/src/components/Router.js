import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import CreatePost from "../pages/CreatePost";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserProfile from "../pages/UserProfile";
import ViewProfile from "../pages/ViewProfile";

const Router = () => {
  const [loading, updateLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState("Dave");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    updateLoading(false);
    verifyTokenValid();
  }, []);

  const verifyTokenValid = async () => {};

  // const toggleAuth = (value, user, done) => {
  //   setAuth(value), setCurrentUser(user), () => done();
  // };

  return (
    <main>
      {loading ? (
        <h3>Page Loading....</h3>
      ) : (
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route
            path="/register"
            component={(props) => <Signup {...props} />}
          />
          <Route path="/login" component={(props) => <Login {...props} />} />
          <Route
            auth={auth}
            path="/explore"
            component={(props) => (
              <Layout currentUser={currentUser} auth={auth}>
                <Explore {...props} currentUser={currentUser} />
              </Layout>
            )}
          />
          <Route
            auth={auth}
            path="/profile"
            component={(props) => (
              <Layout currentUser={currentUser} auth={auth}>
                <UserProfile {...props} currentUser={currentUser} />
              </Layout>
            )}
          />
          <Route
            auth={auth}
            path="/profile/:user_id"
            component={(props) => (
              <Layout currentUser={currentUser} auth={auth}>
                <ViewProfile {...props} currentUser={currentUser} />
              </Layout>
            )}
          />
          <Route
            auth={auth}
            path="/create/post"
            component={(props) => (
              <Layout currentUser={currentUser} auth={auth}>
                <CreatePost {...props} currentUser={currentUser} />
              </Layout>
            )}
          />
        </Switch>
      )}
    </main>
  );
};

export default Router;
