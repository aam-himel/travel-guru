import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import logo from "../../LogoDark.png";
import "./Navbar.css";
import SignInLinks from "./SignInLinks";
import SignUpLinks from "./SignUpLinks";

function Navbar() {
  return (
    <Container>
      <nav>
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
    </Container>
  );
}

export default Navbar;
