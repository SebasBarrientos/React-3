import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <div>
      <span>Header</span>
      <nav>
        <span><Link to="/">Home</Link> </span>
        <span><Link to="/reserve">Reserve</Link> </span>
        <span><Link to="/hello">Hello</Link> </span>
      </nav>
    </div>
  );
};

export default Header;