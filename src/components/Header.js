import React from "react";
import "../css/Header.css";

function Header(props) {
  return (
    <div className="header">
      <h1>{props.heading}</h1>
    </div>
  );
}

export default Header;
