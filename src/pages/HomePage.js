/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useInput } from '../components/GetUserInput';
// import axios from 'axios'; // be used for fetching data from backend


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

    const { value: username, bind: bindUserName, reset: resetUserName, update: updateUserName } = useInput('');

    return (
        <div >
            <div css={containerStyle}>
                <h1>Sign In</h1>
            </div>
            <input required
                type="text"
                placeholder="Username"
            />
            <input required
                type="text"
                placeholder="Password"
            />
        </div>
    );
}