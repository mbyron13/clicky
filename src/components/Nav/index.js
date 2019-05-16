import React from "react";
import "./Nav.css";
const Nav = props => (
  <nav>
    <ul>
      <li>
        <p>{props.title}</p>
      </li>|

      <li>{props.rightWrong}</li>|

      <li>Current Score: {props.score}</li>|

      <li>Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;