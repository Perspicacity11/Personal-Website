import React, { useRef } from "react";
import "./style.css";
import "./bootstrap.min.css";
import "./font-awesome.min.css";

const Navbar = () => {
    return (
    <header id="masthead" className="site-header">
        <nav
          id="primary-navigation"
          className="site-navigation"
          dataSpy="affix"
        >
          <div className="container affix-top">
            <div className="navbar-header page-scroll affix-top">

              <div className="page-scroll site-logo">
                <a href="#top">Cassius Naylor</a>
                <ul className="nav navbar-nav navbar-right">
                  <li className="page-scroll">
                    <a href="#intro">Main page</a>
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
            </div>
          </div>
        </nav>
      </header>
)}

export default Navbar;
