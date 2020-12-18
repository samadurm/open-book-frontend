/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
// import axios from 'axios'; // be used for fetching data from backend

const containerStyle = css`
    width: 100%;
    margin-top: 75px;
    text-align: center;
    font-size: 20px;
    font-weight: 100;
    
`;

export default function Homepage() {

    return (
        <div >
            <div css={containerStyle}>
                <h1>Sign In</h1>

                <input required
                    type="text"
                    placeholder="Username"
                />
                <input required
                    type="text"
                    placeholder="Password"
                />
            </div>
        </div>
    );
}