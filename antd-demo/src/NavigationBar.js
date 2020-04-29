import React from "react";
import { Link } from "react-router-dom";

import Portfolio from "./Portfolio";
import Contact from "./Contact";

function NavigationBar() {
  return (
    <div>
      <h1> Navigation </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>{" "}
      </ul>
    </div>
  );
}

export default NavigationBar;
