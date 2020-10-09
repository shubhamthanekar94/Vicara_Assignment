import React from "react";
import stackoverflowlogo from "../../../assets/download.png";
const navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light border border-bottom-1 border-top-5">
    <a className="navbar-brand" href="/">
      <img
        src={stackoverflowlogo}
        width="150"
        height="40"
        className="d-inline-block align-top ml-5"
        alt="stackoverflowlogo"
      />
    </a>
  </nav>
);
export default navbar;
