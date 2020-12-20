/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useInput } from '../components/GetUserInput';
// import axios from 'axios'; // be used for fetching data from backend

import React, { Fragment } from "react";

const containerStyle = css`
    width: 100%;
    margin-top: 75px;
    text-align: center;
    font-size: 20px;
    font-weight: 100;  
`;

const outerContainer = css`  
    background-color: #8FC0A9;
`;

export default function Homepage() {

    const { value: username, bind: bindUserName, reset: resetUserName } = useInput('');
    const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');

    console.log("username: ", username);
    console.log("password: ", password);

    return (

        <Fragment>
        {/* <Hero /> */}
        <hr />
        {/* <Content /> */}
        Hello World!
      </Fragment>
    );
}