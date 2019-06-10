import React, { useState, useEffect } from "react"
import styled from "styled-components"

import TitleLink from "./title-link"
import NavLink from "./nav-link"

const MobileHeader = styled.header`
  background: black;
  background: ${props => props.theme.backgroundColor};
  > nav {
    ${"" /* background-color: grey; */}
    height: 100%; /* 100% Full-height */
    right: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
    ${"" /* padding-top: 60px;  */}
    /* Place content 60px from the top */
  position: fixed; /* Stay in place */
    z-index: 1;
    /* Stay on top */
    top: 0; /* Stay at the top */
    ${"" /* transition: 0.5s;  */}
    /* 0.5 second transition effect to slide in the sidenav */
  width: 100%;
    /* 0 width - change this with JavaScript */

    > span {
      font-size: 36px;
      right: 25px;
      margin-left: 50px;
    }
  }
`
export default () => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)

  return (
    <MobileHeader>
      <nav>
        <span onClick={() => toggleMenu()}>close</span>
        <ul>
          <li>
            <TitleLink to="/">Home</TitleLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/work">Work</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <span onClick={() => toggleMenu()}>open</span>
    </MobileHeader>
  )
}
