import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <>
      <Nav fill>
        <NavItem>
          **<NavLink tag={Link} to="/" id="header-home-text">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          **<NavLink tag={Link} to="/SVIndex" id="header-index-text">Villagers</NavLink>
        </NavItem>
        <NavItem>
          **<NavLink tag={Link} to="/SVNew" id="header-new-text">Add New</NavLink>
        </NavItem>

      </Nav>




    </>
  );
};

export default Header;
