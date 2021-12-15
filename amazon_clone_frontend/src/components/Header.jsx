import React from "react";
import classes from "../styles/header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <span className={classes.brand}>Amazon Clone</span>
        </Link>
      </div>
      <div>
        <Link to="/cart">Cart</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
  );
}

export default Header;
