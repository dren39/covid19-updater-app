import React from 'react'
import {Link, withRouter} from 'react-router-dom';

function Navbar() {
    return (
        <div className="top-bar-wrapper">
            <div className="menu-bar-wrapper">
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
            </div>
        </div>
    )
}

export default withRouter(Navbar)
