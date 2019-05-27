import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

// 로그인이 된 상황
const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed} />
  </>
);

// 로그인이 되지 않은 상황
const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth} />
  </>
);

// 로그인 처리 Router
const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </Router>
);

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
