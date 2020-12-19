import { NavLink } from 'react-router-dom';
import "../css/Navbar.css";
//import React from 'react';
import { useState } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSearch } from '@fortawesome/free-solid-svg-icons'
//<FontAwesomeIcon className="search-icon" icon={faSearch} />


export default function Navbar() {

    const [search, setSearch] = useState("");

    const getSearch = e => {
        e.preventDefault();
        alert(search + " succesfully sumbitted!!"); //temporary until I can call to api
        setSearch('');
    }

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log("SEARCH:" + search);
    };

    return (
        <header >
            <nav >
                <ul className="navbarStyle">
                    <li className="OpenBookStyle"> <NavLink className="logo pageStyle" exact to='/'>OpenBook</NavLink> </li>
                    <li className="listStyle">
                        <form onSubmit={getSearch} className="search pageStyle">
                            <input className="search-bar" onChange={updateSearch} type="text" placeholder="Search"></input>
                        </form>
                    </li>
                    <li className="listStyle"> <NavLink className="pageStyle" exact to='/create'>Create</NavLink> </li>
                    <li className="listStyle"> <NavLink className="pageStyle" exact to='/browse'>Browse</NavLink> </li>
                </ul>
            </nav>
        </header>
    );
}