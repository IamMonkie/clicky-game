import React, { Component } from "react";
import 
// --------------------------------------------------------
// styling
const navStyle = {
  backgroundSize: "contain",
  minHeight: "20em",
  backgroundRepeat: "no-repeat",
  display: "flex",
  padding: "0"
};
// --------------------------------------------------------

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbarContainer" style={navStyle}>
          <div>test</div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
