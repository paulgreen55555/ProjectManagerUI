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
                    <NavItem eventKey={1} href="/">
                        Dashboard
                    </NavItem>
                    <NavItem eventKey={2} href="/projects">
                        Projects
                    </NavItem>
                    <NavItem eventKey={3} href="/users">
                        Users
                    </NavItem>
                </Nav>
            <div>
                <Link to="/">Dashboard</Link>


                <Link to="/projects">Projects</Link>


                <Link to="/users">Users</Link>

            </div>
            </Navbar >
        </div >
    )
}

export default Header