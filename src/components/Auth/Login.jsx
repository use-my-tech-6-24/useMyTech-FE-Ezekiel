import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { loginUser } from "../../actions/auth";
import { Button, Input } from "../../styles/Styles";

function Login(props) {
  const username = React.createRef();
  const password = React.createRef();
  const { error } = props;
  const { isSignedIn } = props.auth;

  const handleLogin = e => {
    e.preventDefault();

    const payload = {
      username: username.current.value,
      password: password.current.value
    };

    props.loginUser(payload);
  };

  if (isSignedIn) {
    props.history.push("/");
  }

  if (error) {
    toast.error(error);
  }

  return (
    <div className="mt-5">
      <form
        className="text-center border border-light p-5 w-50 text-center m-auto"
        onSubmit={handleLogin}
      >
        <p className="h4 mb-4">Sign in</p>
        <Input
          type="text"
          ref={username}
          required
          className="form-control mb-4"
          placeholder="Username"
        />

        <Input
          type="password"
          ref={password}
          required
          className="form-control mb-4"
          placeholder="Password"
        />

        <div className="d-flex justify-content-around" />

        <Button className="btn  btn-block my-4" type="submit">
          Sign in
        </Button>

        <p>
          Not a member?
          <Link to="/register" className="purple-text">
            Register
          </Link>
        </p>

        <p>or sign in with:</p>
        <a href="##" className="purple-text mx-2">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="##" className="purple-text mx-2">
          <i className="fab fa-twitter" />
        </a>
        <a href="##" className="purple-text mx-2">
          <i className="fab fa-linkedin-in" />
        </a>
        <a href="##" className="purple-text mx-2">
          <i className="fab fa-github" />
        </a>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error.error
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
