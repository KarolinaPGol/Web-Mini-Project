import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <NavigationBar />
    </div>
  );
}

export default App;
