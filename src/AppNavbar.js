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
import { Link } from 'react-router-dom';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand></NavbarBrand>
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
                    <DropdownItem tag={Link} to="/location">
                        Manage Locations
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/organization">
                        Manage Organizations
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>

                    <NavItem>
                        <NavLink href="https://github.com/stuvwxyz/character-ui">GitHub UI</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/stuvwxyz/character-api">GitHub API</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>;

    }
}
