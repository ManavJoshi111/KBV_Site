import React from 'react'
import { NavLink } from 'react-router-dom';
import "../CSS/Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link  text-uppercase active mx-2" + (isActive ? " active_class" : "")
                                    }
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link text-uppercase active mx-2" +
                                        (isActive ? " active_class" : "")}
                                    aria-current="page"
                                    to="/activites"
                                >
                                    Activities
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link text-uppercase active mx-2" +
                                        (isActive ? " active_class" : "")}
                                    aria-current="page"
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link text-uppercase active mx-2" +
                                        (isActive ? " active_class" : "")
                                    }
                                    aria-current="page"
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;