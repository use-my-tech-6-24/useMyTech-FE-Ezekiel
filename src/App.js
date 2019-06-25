import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Common/Navbar";
import TechItemsList from "./components/TechItems/TechItemsList";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Route exact path="/" component={TechItemsList} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
