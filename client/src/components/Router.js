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

const Router = () => {
  const [loading, updateLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState("Dave");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    updateLoading(false);
    // verifyTokenValid();
  }, []);

  // verifyTokenValid = async () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     try {
  //       const session = await __CheckSession();
  //       // console.log("session", session);
  //       this.setState(
  //         {
  //           currentUser: session.user,
  //           authenticated: true,
  //         },
  //         () => this.props.history.push("/profile")
  //       );
  //     } catch (error) {
  //       this.setState({ currentUser: null, authenticated: false });
  //       localStorage.clear();
  //     }
  //   }
  // };

  // const toggleAuth = (value, user, done) => {
  //   setAuthenticated(value), setCurrentUser(user), () => done();
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
          <Route
            path="/login"
            component={(props) => (
              <Login
                // toggleAuthenticated={toggleAuthenticated}
                {...props}
              />
            )}
          />
          <Route
            authenticated={authenticated}
            path="/explore"
            component={(props) => (
              <Layout currentUser={currentUser} authenticated={authenticated}>
                <Explore {...props} currentUser={currentUser} />
              </Layout>
            )}
          />
          <Route
            authenticated={authenticated}
            path="/profile"
            component={(props) => (
              <Layout currentUser={currentUser} authenticated={authenticated}>
                <UserProfile {...props} currentUser={currentUser} />
              </Layout>
            )}
          />
          <Route
            authenticated={authenticated}
            path="/profile/:user_id"
            component={(props) => (
              <Layout currentUser={currentUser} authenticated={authenticated}>
                <ViewProfile {...props} currentUser={currentUser} />
              </Layout>
            )}
          />
          <Route
            authenticated={authenticated}
            path="/create/post"
            component={(props) => (
              <Layout currentUser={currentUser} authenticated={authenticated}>
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
