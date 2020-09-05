import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reports from "./pages/Reports";
import Team from "./pages/Team";
import Products from "./pages/Products";
import Messages from "./pages/Messages";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/messages" component={Messages} />
          <Route path="/products" component={Products} />
          <Route path="/reports" component={Reports} />
          <Route path="/team" component={Team} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
