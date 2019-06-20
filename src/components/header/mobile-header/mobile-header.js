import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import useOnClickOutside from "../../../hooks/onClickOutside"
// import { MobileHeader, MenuBar, MenuButton } from "./mobile-header.css"
import styled from "styled-components"

import Nav from "./nav"

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

const MenuBar = styled.div`
  align-items: center;
  background: var(--primary);
  color: var(--secondary);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 1em;
`

const MenuButton = styled.button`
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  height: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  width: auto;
`

const MobileHeader = styled.header`
  ${'' /* width: 100%; */}
`
