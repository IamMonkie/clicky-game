import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item" idName="gameTitle">
        Welcome to Clicky Game
      </li>
      <li className="nav-item" idName="currentScore">
        Score:{" | "}
      </li>
      <li className="nav-item" idName="topScore">
        Top Score
      </li>
    </ul>
  );
}

export default NavTabs;
