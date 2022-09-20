import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"


const Header = () => {
    return (
        <>
            <Nav
                tabs
            >
                <NavItem>
                    <NavLink
                        active
                        href="#"
                    >
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Index
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        disabled
                        href="#"
                    >
                        New
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        disabled
                        href="#"
                    >
                        Edit
                    </NavLink>
                </NavItem>
            </Nav>
        </>
    )
}

export default Header