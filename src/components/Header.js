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
                        href="./Home"
                    >
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/SVIndex">
                        Index
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                       
                        href="/SVNew"
                    >
                        New
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                       
                        href="/SVEdit"
                    >
                        Edit
                    </NavLink>
                </NavItem>
            </Nav>
        </>
    )
}

export default Header