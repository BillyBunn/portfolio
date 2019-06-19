import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import useOnClickOutside from "../../../hooks/onClickOutside"
import { MobileHeader, MenuBar, MenuButton } from "./mobile-header.css"
import Nav from "./nav"

export default ({ routes }) => {
  const ref = useRef()
  const [isNavOpen, setNavOpen] = useState(false)
  const toggle = () => {
    console.log("toggle")
    setNavOpen(true)
  }
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
      {console.log("isNavOpen", isNavOpen)}
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
