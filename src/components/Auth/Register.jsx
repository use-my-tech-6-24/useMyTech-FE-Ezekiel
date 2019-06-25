import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import { registerUser } from "../../actions/auth";

function Register(props) {
  const username = React.createRef();
  const email = React.createRef();
  const password = React.createRef();

  const handleRegister = e => {
    e.preventDefault();

    const payload = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value
    };

    console.log(payload);
    props.registerUser(payload);
    toast.success("Registration Succesfull, Kindly Login");
  };

  if (props.auth.isSignedIn) {
    props.history.push("/");
  }

  if (props.auth.isRegistered) {
    props.history.push("/login");
  }

  return (
    <form onSubmit={handleRegister}>
      <input type="text" placeholder="Enter Username" ref={username} required />
      <input type="email" placeholder="Enter Email" ref={email} required />
      <input
        type="password"
        placeholder="Enter Password"
        ref={password}
        required
      />
      <button>Sign Up</button>
    </form>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
