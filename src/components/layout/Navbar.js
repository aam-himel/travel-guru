import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import logo from "../../Logo.png";
import "./Navbar.css";
import SignInLinks from "./SignInLinks";
import SignUpLinks from "./SignUpLinks";

function Navbar() {
  return (
    <header style={{padding:'0 5%', background:'#2f3640', color:'white'}}>
      <nav style={{color:'white'}}>
        <Link to="/">
        <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="links">
          <li>
            <Link to="/news">news</Link>
          </li>
          <li>
            <Link to="/destination">destination</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>

          <SignInLinks />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
