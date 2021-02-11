import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container } from "@material-ui/core";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
