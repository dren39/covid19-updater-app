import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
    return (
        <div className="top-bar-wrapper">
            <div class="title-wrapper">
                <h3>Covid19 Daily News</h3>
            </div>
            
            <div class="menu-bar-wrapper">
                <ul class="menu-bar">
                    <li class="home-nav">
                        <Link to={"/"}>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li class="about-nav">
                        <Link to={"/about"}>
                            <p>About</p>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <div className="menu-bar-wrapper">
                <div className="title-wrapper">
                    <h3>Covid19 Daily News</h3>
                </div>
                <div className="navigation-wrapper">
                    <div>
                        <Link to={"/"}>
                            <p>Home</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/about"}>
                            <p>About</p>
                        </Link>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default withRouter(Navbar)
