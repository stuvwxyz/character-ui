import React, { Component } from 'react';
import { Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from './Auth';

function NavBar(props) {
    const signOut = () => {
        auth0Client.signOut();
        props.history.replace('/');
    };

    return (
        <Navbar color="faded" light expand="md">
            <Nav className="navbar navbar-dark bg-dark fixed-top">
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Menu
                    </DropdownToggle>
                    <DropdownMenu left>
                        <DropdownItem tag={Link} to="/">
                            Home
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem tag={Link} to="/character">
                            Manage Characters
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem divider />
                        <DropdownItem tag="a" href="https://github.com/stuvwxyz/character-ui">
                            GitHub UI
                        </DropdownItem>
                        <DropdownItem tag="a" href="https://github.com/stuvwxyz/character-api">
                            GitHub API
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                {
                    !auth0Client.isAuthenticated() &&
                    <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
                }
                {
                    auth0Client.isAuthenticated() &&
                    <div>
                        <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                        <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
                    </div>
                }
            </Nav>
        </Navbar>
    );
}

export default withRouter(NavBar);
