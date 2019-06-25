import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { errorOption, successOption } from "../../utils/utils";
import { Button, Input, Form } from "../../styles/Styles";
import { registerUser } from "../../actions/auth";

function Register(props) {
  const username = React.createRef();
  const email = React.createRef();
  const password = React.createRef();

  const { error } = props;
  const { isSignedIn, isRegistered } = props.auth;
  const handleRegister = e => {
    e.preventDefault();

    const payload = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value
    };

    props.registerUser(payload);
  };

  if (isSignedIn) {
    props.history.push("/");
  }

  if (isRegistered) {
    toast.success("Registration Succesfull, Kindly Login", successOption());
    props.history.push("/login");
  }

  if (error) {
    toast.error(error, errorOption());
  }

  return (
    <div className="mt-5">
      <Form
        className="text-center border border-light p-5 w-50 text-center m-auto"
        onSubmit={handleRegister}
      >
        <p className="h4 mb-4">Register</p>
        <Input
          type="text"
          ref={username}
          required
          className="form-control mb-4"
          placeholder="Username"
        />

        <Input
          type="email"
          ref={email}
          required
          className="form-control mb-4"
          placeholder="Email"
        />

        <Input
          type="password"
          ref={password}
          required
          className="form-control mb-4"
          placeholder="Password"
        />

        <div className="d-flex justify-content-around" />

        <Button className="btn btn-block my-4" type="submit">
          Register
        </Button>

        <p>
          Already a member?
          <Link to="/login" className="purple-text">
            Login
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
      </Form>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error.error
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
