// import { Route, Switch } from 'react-router-dom';
import React from "react";
import { Router, Route, Switch } from "react-router-dom";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/react';

import Loading from "./components/Loading";
import Profile from "./views/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

import Navbar from './components/Navbar';
import Create from './pages/Create';
import Browse from './pages/Browse';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

const pageStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: 'Helvetica Neue';
    font-weight: 300;
    font-size: 18px;
    min-height: 100%;
    background-color: #f8f9fa;
  }
  a {
    font-weight: bold;
    text-decoration: none;
    color: black;
  }
`;

export default function App() {

  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Global styles={pageStyles} />
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/create" exact component={Create} />
          <Route path="/browse" exact component={Browse} />
          <Route path="/profile" exact component={Profile} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}