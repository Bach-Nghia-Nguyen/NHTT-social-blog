import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// imort components
import NavigationBar from "./components/NavigationBar";
import Notification from "./components/Notification";

// import pages
import Routes from "./containers/Routes";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Notification />
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
}

export default App;
