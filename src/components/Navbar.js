import { NavLink } from 'react-router-dom';
import "../css/Navbar.css";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

export default function Navbar() {

    return (
        <header >
            <nav >
                <ul className="navbarStyle">
                    <li className="OpenBookStyle"> <NavLink className="logo pageStyle" exact to='/'>OpenBook</NavLink> </li>
                    <li className="listStyle"> <NavLink className="pageStyle" exact to='/create'>Create</NavLink> </li>
                    <li className="listStyle"> <NavLink className="pageStyle" exact to='/browse'>Browse</NavLink> </li>
                </ul>
            </nav>
        </header>
    );
}