import React from "react";
import { Link } from "react-router-dom";
const Header = props => {
  return (
    <div>
      <div>
        <Link to="/a/home">Home</Link>
      </div>
      <div>
        <Link to="/b/login">Login</Link>
      </div>
      {/* {props.children} */}
    </div>
  );
};

export default Header;
