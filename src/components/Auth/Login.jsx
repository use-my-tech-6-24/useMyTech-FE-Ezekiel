import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import { loginUser } from "../../actions/auth";

function Login(props) {
  const username = React.createRef();
  const password = React.createRef();

  const handleLogin = e => {
    e.preventDefault();

    const payload = {
      username: username.current.value,
      password: password.current.value
    };

    console.log(payload);
    props.loginUser(payload);
    // toast.success("Registration Succesfull, Kindly Login");
  };

  if (props.auth.isSignedIn) {
    props.history.push("/");
  }

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Enter Username" ref={username} required />
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
  { loginUser }
)(Login);
