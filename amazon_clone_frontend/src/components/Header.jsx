import React from 'react'
import classes from "../styles/header.module.css";

function Header() {
    return (
        <header>
        <div>
          <a className={classes.brand} href="/">
            Amazon Clone
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
    )
}

export default Header
