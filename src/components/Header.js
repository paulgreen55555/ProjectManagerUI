import React from 'react';
import { Link } from "react-router-dom";

export default class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Project Manger</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}