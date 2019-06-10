import React, { useState, useEffect } from "react"
import styled from "styled-components"

import TitleLink from "./title-link"
import NavLink from "./nav-link"

const DesktopHeader = styled.div`
  > nav {
    background-color: lightcoral;
    > span {
      display: none;
    }
    > ul {
      align-items: center;
      display: flex;
      justify-content: space-evenly;
      > li {
        display: inline;
      }
    }
  }
  > span {
    display: none;
  }
`

export default () => {
  return (
    <DesktopHeader>
      <nav>
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
    </DesktopHeader>
  )
}