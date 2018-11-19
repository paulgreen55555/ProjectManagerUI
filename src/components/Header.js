import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Project Manger</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarmenu" className="collapse navbar-collapse ">
                <ul className="navbar-nav t_right">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/projects">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header