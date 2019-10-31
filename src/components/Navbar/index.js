import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <Link id="logo-container" to="/search" className="brand-logo">Logo</Link>
          <ul className="right">
            <li><Link to="/saved">Saved</Link></li>
          </ul>
          <ul className="right">
            <li><Link to="/search">Search</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;
