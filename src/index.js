import { BrowserRouter } from 'react-router-dom';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";

import config from "./auth_config.json";
import history from "./utils/history";

const onRedirectCallback = (appState) => {
    history.push(
        appState && appState.returnTo
            ? appState.returnTo
            : window.location.pathname
    );
};

ReactDOM.render(
    <BrowserRouter>
        <Auth0Provider
            domain={config.domain}
            clientId={config.clientId}
            audience={config.audience}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            <App />
        </Auth0Provider>

    </BrowserRouter>,
    document.getElementById('root')
);