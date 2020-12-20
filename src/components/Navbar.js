/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { NavLink } from 'react-router-dom';
import { NavLink as RouterNavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import "../css/Navbar.css";
//import React from 'react';
import React, { useState } from 'react';


import { faSearch } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon className="search-icon" icon={faSearch} />

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth0 } from "@auth0/auth0-react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";


export default function NavBar() {

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

  const [isOpen, setIsOpen] = useState(false);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () => logout({
    returnTo: window.location.origin,
  });

  return (
    <header >
      <nav >
        <ul className="navbarStyle">
          <li className="OpenBookStyle"> <NavLink activeClassName="active-pg" className="pageStyle" exact to='/'>OpenBook</NavLink> </li>

          <li className="listStyle">
          {/* <div > */}
            <Navbar color="light" light expand="md">
              <Container>
                <NavbarBrand className="logo" />
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav >
                    {!isAuthenticated && (
                      <NavItem>
                        <Button
                          id="qsLoginBtn"
                          color="primary"
                          className="btn-margin"
                          onClick={() => loginWithRedirect()}
                        >
                          Log in
                        </Button>
                      </NavItem>
                    )}
                    {isAuthenticated && (
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret id="profileDropDown">
                          <img
                            src={user.picture}
                            alt="Profile"
                            className="nav-user-profile rounded-circle"
                            width="50"
                          />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>{user.name}</DropdownItem>
                          <DropdownItem
                            tag={RouterNavLink}
                            // to="/profile"
                            to="/"
                            className="dropdown-profile"
                            activeClassName="router-link-exact-active"
                          >
                            <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                          </DropdownItem>
                          <DropdownItem
                            id="qsLogoutBtn"
                            onClick={() => logoutWithRedirect()}
                          >
                            <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
            out
          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    )}
                  </Nav>
                  {!isAuthenticated && (
                    <Nav className="d-md-none" navbar>
                      <NavItem>
                        <Button
                          id="qsLoginBtn"
                          color="primary"
                          block
                          onClick={() => loginWithRedirect({})}
                        >
                          Log in
        </Button>
                      </NavItem>
                    </Nav>
                  )}
                  {isAuthenticated && (
                    <Nav
                      className="d-md-none justify-content-between"
                      navbar
                      style={{ minHeight: 170 }}
                    >
                      <NavItem>
                        <span className="user-info">
                          <img
                            src={user.picture}
                            alt="Profile"
                            className="nav-user-profile d-inline-block rounded-circle mr-3"
                            width="50"
                          />
                          <h6 className="d-inline-block">{user.name}</h6>
                        </span>
                      </NavItem>
                      <NavItem>
                        <FontAwesomeIcon icon="user" className="mr-3" />
                        <RouterNavLink
                          to="/"
                          // to="/profile"
                          activeClassName="router-link-exact-active"
                        >
                          Profile
        </RouterNavLink>
                      </NavItem>
                      <NavItem>
                        <FontAwesomeIcon icon="power-off" className="mr-3" />
                        <RouterNavLink
                          to="#"
                          id="qsLogoutBtn"
                          onClick={() => logoutWithRedirect()}
                        >
                          Log out
        </RouterNavLink>
                      </NavItem>
                    </Nav>
                  )}
                </Collapse>
              </Container>
            </Navbar>
            {/* </div> */}
          </li>
          
          {/* <li className="listStyle">
            <form onSubmit={getSearch} className="search">
              <input id="search-bar" onChange={updateSearch} type="text" placeholder="Search..." />
            </form>
          </li> */}
          <li className="listStyle"> <NavLink activeClassName="active-pg" className="pageStyle" exact to='/create'>Create</NavLink> </li>
          <li className="listStyle"> <NavLink activeClassName="active-pg" className="pageStyle" exact to='/browse'>Browse</NavLink> </li>
        </ul>
      </nav>
    </header>
  );
}