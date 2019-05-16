import React from "react";

const Container = props =>
  <div className={`container${props.fluid ? "-fluid" : ""}`} id="container">
    {props.children}
  </div>;

export default Container;