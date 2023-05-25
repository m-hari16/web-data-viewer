import React from "react";
import './index.css'

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <h1>#GG-Movies</h1>
            </div>
            <div className="nav-menu">
                <ul className="list-menu">
                    <li>New Release</li>
                    <li>Top</li>
                    <li>Genre</li>
                    <li>Platform</li>
                    <li>Creator</li>
                </ul>
            </div>
            <div className="social-button">
                {/* Link social button */}
            </div>
        </nav>
    )
}

export default Navigation
