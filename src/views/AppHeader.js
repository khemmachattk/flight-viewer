import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class AppHeader extends Component {
  render() {
    return (
      <Navbar className="sticky-top" bg="dark" variant="dark">
        <Link className="navbar-brand" to="/">
          <img
            alt=""
            src="/assets/plane.png"
            width="30"
            height="30"
            className="d-inline-block align-top mr-3"
          />
          {"Flight Viewer"}
        </Link>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/information">
              Information
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
