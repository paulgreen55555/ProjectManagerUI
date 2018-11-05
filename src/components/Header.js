import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';

function Header() {
    return (
        <div>
            < Navbar >
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Project-Manager</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        <Link to="/">Dashboard</Link>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <Link to="/projects">Projects</Link>
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        <Link to="/users">Users</Link>
                    </NavItem>
                </Nav>
            </Navbar >
        </div>
    )
}

export default Header