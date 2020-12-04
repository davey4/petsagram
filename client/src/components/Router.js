import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import CreatePost from "../pages/CreatePost";
import Feed from "../pages/Feed";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserProfile from "../pages/UserProfile";
import ViewProfile from "../pages/ViewProfile";

const Router = () => {
  const [loading, updateLoading] = useState(true);

  useEffect(() => {
    console.log("mounted");
    updateLoading(false);
  }, []);
  return (
    <main>
      {loading ? (
        <h3>Page Loading....</h3>
      ) : (
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/register" component={() => <Signup />} />
        </Switch>
      )}
    </main>
  );
};

export default Router;
