import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Create from './pages/Create';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/react';

const pageStyles = css`
  body {
    margin: 0;
    font-family: Helvetica Neue;
    font-weight: 300;
    font-size: 18px;
    min-height: 100%;
    background-color: #8FC0A9;
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
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}