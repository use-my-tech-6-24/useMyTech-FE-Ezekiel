import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import PrivateRoute from "./components/Common/PrivateRoute";
import Navbar from "./components/Common/Navbar";
import TechItemsList from "./components/TechItems/TechItemsList";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import store from "./store";
import { decodeToken } from "./utils/utils";
import { setCurrentUser, signOut } from "./actions/auth";

import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

if (localStorage.token) {
  const { token } = localStorage;

  // Decode token
  const decodedToken = decodeToken(token);

  // Set current user
  store.dispatch(setCurrentUser(decodedToken));

  // Check expired token
  const currentTime = Date.now() / 1000;

  if (decodedToken.exp < currentTime) {
    // Logout user
    store.dispatch(signOut());
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Switch> */}
        <div className="container-fluid">
          <Navbar />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/" component={TechItemsList} />
        </div>
        {/* </Switch> */}
        <ToastContainer
          autoClose={3000}
          position="top-right"
          hideProgressBar={true}
        />
      </Router>
    </Provider>
  );
}

export default App;
