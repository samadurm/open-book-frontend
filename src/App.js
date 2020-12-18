import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Create from './pages/Create';
import Browse from './pages/Browse';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/react';

const pageStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: 'Helvetica Neue';
    font-weight: 300;
    font-size: 18px;
    min-height: 100%;
  }
  a {
    font-weight: bold;
    text-decoration: none;
    color: black;
  }
`;

export default function App() {

  return (
    <div >
      <Global styles={pageStyles} />
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/browse" component={Browse} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}