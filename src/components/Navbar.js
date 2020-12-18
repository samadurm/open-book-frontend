import { NavLink } from 'react-router-dom';

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const navbarStyle = css`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
    border-bottom: 1px solid black;
`;

const listStyle = css`
    float: right;    
`;

const OpenBookStyle = css`
    float: left;    
`;

const pageStyle = css`
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
        color: #87A96B;
    }
    &.active{
        color: green;
    }
`;

export default function Navbar() {

    return (
        <header >
            <nav >
                <ul css={navbarStyle}>
                    <li css={OpenBookStyle}> <NavLink css={pageStyle} exact to='/'>OpenBook</NavLink> </li>
                    <li css={listStyle}> <NavLink css={pageStyle} exact to='/create'>Create</NavLink> </li>
                </ul>
            </nav>
        </header>
    );
}