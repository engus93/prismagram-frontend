// Modules
import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

// My Files List
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Search from "../Routes/Search";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";

// When Log In
const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/search" component={Search} />
    <Route path="/explore" component={Explore} />
    <Route path="/:username" component={Profile} />
  </Switch>
);

// When Log Out
const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
  </Switch>
);

// Render
const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

// PropType Structure
AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
