import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const NavBar = ({ icon, title }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};

NavBar.defaultProps = {
  title: "Chercheur de Github",
  icon: "fab fa-github"
};

NavBar.protoType = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavBar;
