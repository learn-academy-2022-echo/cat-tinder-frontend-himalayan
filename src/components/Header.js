import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <Nav tabs>
        <NavItem>
          **<NavLink tag={Link} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          **<NavLink tag={Link} to="/SVIndex">Index</NavLink>
        </NavItem>
        <NavItem>
          **<NavLink tag={Link} to="/SVNew">New</NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default Header;
