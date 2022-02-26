import React from "react";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

const CustomNavbar = () => {
  return (
    <div className="layout-column justify-content-center align-items-center">
      <div
        className="layout-row justify-content-around align-items-center mt-20 links"
        data-testid="navigation-tabs"
      >
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/news">News</Link>
        </a>
        <a>
          <Link to="/contact">Contact</Link>
        </a>
        <a>
          <Link to="/about">About</Link>
        </a>
      </div>

      <div className="card w-20 ma-0">
        <section className="card-text" data-testid="tab-content">
          <span></span>
        </section>
      </div>
    </div>
  );
}

export default CustomNavbar;