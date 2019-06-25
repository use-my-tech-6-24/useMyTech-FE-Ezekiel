import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TechItemsList from "./components/TechItems/TechItemsList";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={TechItemsList} />
      </Router>
    </Provider>
  );
}

export default App;
