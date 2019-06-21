import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import useOnClickOutside from "../../../hooks/onClickOutside"
import NavLink from "../nav-link"

import { MobileHeader, MenuBar, MenuButton, MobileNav } from "./mobile-header.css"

export default ({ routes }) => {
  const ref = useRef()
  const [isNavOpen, setNavOpen] = useState(false)
  const toggle = () => setNavOpen(true)

  useOnClickOutside(ref, () => setNavOpen(false))

  return (
    <MobileHeader>
      <MenuBar>
        <Link to="/">Billy Bunn</Link>
        <MenuButton
          onClick={toggle}
          style={{
            color: isNavOpen ? "inherit" : "var(--accent)",
            pointerEvents: isNavOpen ? "none" : "auto",
            cursor: isNavOpen ? "pointer" : "pointer",
          }}
        >
          Menu
        </MenuButton>
      </MenuBar>
      <Nav
        ref={ref}
        style={{
          display: isNavOpen ? "block" : "none",
        }}
        routes={routes}
      />
    </MobileHeader>
  )
}

const Nav = React.forwardRef(({ routes, ...other }, ref) => (
  <MobileNav ref={ref} {...other}>
    <ul>
      {routes.map((route, idx) => (
        <li key={idx}>
          <NavLink route={route} />
        </li>
      ))}
    </ul>
  </MobileNav>
))
