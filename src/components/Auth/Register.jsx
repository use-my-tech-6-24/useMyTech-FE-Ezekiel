import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
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
    toast.success("Registration Succesfull, Kindly Login");
    props.history.push("/login");
  }

  if (error) {
    toast.error(error);
  }

  return (
    <div className="mt-5">
      <form
        className="text-center border border-light p-5 w-50 text-center m-auto"
        onSubmit={handleRegister}
      >
        <p className="h4 mb-4">Regiser</p>
        <input
          type="text"
          ref={username}
          required
          className="form-control mb-4"
          placeholder="Username"
        />

        <input
          type="email"
          ref={email}
          required
          className="form-control mb-4"
          placeholder="Email"
        />

        <input
          type="password"
          ref={password}
          required
          className="form-control mb-4"
          placeholder="Password"
        />

        <div className="d-flex justify-content-around" />

        <button className="btn btn-info btn-block my-4" type="submit">
          Register
        </button>

        <p>
          Already a member?
          <Link to="/login">Login</Link>
        </p>

        <p>or sign in with:</p>
        <a href="##" className="light-blue-text mx-2">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="##" className="light-blue-text mx-2">
          <i className="fab fa-twitter" />
        </a>
        <a href="##" className="light-blue-text mx-2">
          <i className="fab fa-linkedin-in" />
        </a>
        <a href="##" className="light-blue-text mx-2">
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
  { registerUser }
)(Register);
