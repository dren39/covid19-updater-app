import React from 'react'
import {Link, withRouter} from 'react-router-dom';

function Navbar() {
    return (
        <div className="top-bar-wrapper">
            <div className="menu-bar-wrapper">
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
    )
}

export default withRouter(Navbar)
