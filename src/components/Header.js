import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink href="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/SVIndex">Index</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/SVNew">New</NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default Header;
