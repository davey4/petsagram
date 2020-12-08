import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { __CheckSession } from "../services/UserService";

import ProtectedRoute from "./ProtectedRoute";

import Layout from "../pages/Layout";
import CreatePost from "../pages/CreatePost";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserProfile from "../pages/UserProfile";
import ViewProfile from "../pages/ViewProfile";
import Feed from "../pages/Feed";
import Notifications from "../pages/Notifications";

const Router = (props) => {
  const [loading, updateLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    updateLoading(false);
    verifyTokenValid();
  }, []);

  const verifyTokenValid = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const session = await __CheckSession();
        console.log(session.user.id);
        setCurrentUser(session.user.id);
        setAuthenticated(true);
        props.history.push("/feed");
      } catch (error) {
        localStorage.clear();
      }
    }
  };

  const toggleAuthenticated = (value, user) => {
    setAuthenticated(value);
    setCurrentUser(user);
  };

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
          <Route
            path="/login"
            component={(props) => (
              <Login toggleAuthenticated={toggleAuthenticated} {...props} />
            )}
          />
          <ProtectedRoute
            authenticated={authenticated}
            path="/explore"
            component={(props) => (
              <Layout currentUser={currentUser} authenticated={authenticated}>
                <Explore {...props} currentUser={currentUser} />
              </Layout>
            )}
          />
          <ProtectedRoute
            authenticated={authenticated}
            path="/profile"
            component={(props) => (
              <Layout currentUser={currentUser} authenticated={authenticated}>
                <UserProfile {...props} currentUser={currentUser} />
              </Layout>
            )}
          />
          <ProtectedRoute
            authenticated={authenticated}
            path="/profile/view"
            component={(props) => (
              <Layout currentUser={currentUser} authenticated={authenticated}>
                <ViewProfile {...props} currentUser={currentUser} />
              </Layout>
            )}
          />
          <ProtectedRoute
            authenticated={authenticated}
            path="/create/post"
            component={(props) => (
              <Layout currentUser={currentUser} authenticated={authenticated}>
                <CreatePost {...props} currentUser={currentUser} />
              </Layout>
            )}
          />
          <ProtectedRoute
            authenticated={authenticated}
            path="/feed"
            component={(props) => (
              <Layout currentUser={currentUser} authenticated={authenticated}>
                <Feed {...props} currentUser={currentUser} />
              </Layout>
            )}
          />
          <ProtectedRoute
            authenticated={authenticated}
            path="/notifications"
            component={(props) => (
              <Layout currentUser={currentUser} authenticated={authenticated}>
                <Notifications {...props} currentUser={currentUser} />
              </Layout>
            )}
          />
        </Switch>
      )}
    </main>
  );
};

export default withRouter(Router);
