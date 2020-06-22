import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
    return (
        <div className="top-bar-wrapper">
            <div className="title-wrapper">
                <h3>Covid19 Daily Update</h3>
            </div>
            <ul className="menu-bar">
                <li className="home-nav">
                    <Link to={"/"}>
                        <p>Home</p>
                    </Link>
                </li>
                <li className="about-nav">
                    <Link to={"/about"}>
                        <p>About</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Navbar)
