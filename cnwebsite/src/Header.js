import React, { useRef } from "react";
import "./style.css";
import "./bootstrap.min.css";
import "./font-awesome.min.css";


const Header = () => {
    return (
    <header id="masthead" className="site-header sticky-top">
        <nav
          id="primary-navigation"
          className="site-navigation"
        >
          <div className="page-scroll site-logo">
            <a href="#top">Cassius Naylor</a>
                <ul className="nav navbar-nav navbar-right">
                  <li className="page-scroll">
                    <a href="#intro">Welcome</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#aboutme">About me</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#tech">Technology</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#dei">Diversity, equity & inclusion</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
        </nav>
      </header>
)}

export default Header;
