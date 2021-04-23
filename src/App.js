import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// imort components
import NavigationBar from "./components/NavigationBar";
import Notification from "./components/Notification";

// import pages
import HomePage from "./pages/HomePage";
import BlogDetailPage from "./pages/BlogDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// import BlogEditorPage from "./pages/BlogEditorPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Notification />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/blogs/:id" exact component={BlogDetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
