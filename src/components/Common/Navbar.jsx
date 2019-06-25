import React from "react";
import { connect } from "react-redux";
// import {Link} from 'react-router-dom'

import { signOut } from "../../actions/auth";

function Navbar(props) {
  const { isSignedIn } = props.auth;
  let navbar = null;
  if (isSignedIn === true) {
    navbar = (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1 mb-3">
        <a className="navbar-brand purple-text" href="#3">
          UTMS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-555"
          aria-controls="navbarSupportedContent-555"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent-555"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link purple-text" href="#2">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link purple-text" href="#2">
                Features
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item avatar dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="33"
              >
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                  className="rounded-circle z-depth-0"
                  alt="avatar "
                  height="35"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-info"
                aria-labelledby="navbarDropdownMenuLink-4"
              >
                <a className="dropdown-item" href="#4">
                  My account
                </a>
                <a
                  className="dropdown-item"
                  href="#4"
                  onClick={() => {
                    props.signOut();
                  }}
                >
                  Log out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return navbar;
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { signOut }
)(Navbar);
