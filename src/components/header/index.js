import React from "react"
import styled from "styled-components"

import TitleLink from "./title-link"
import NavLink from "./nav-link"

const Header = styled.header`
  > nav {
    > ul {
      align-items: center;
      display: flex;
      justify-content: space-evenly;
      > li {
        ${'' /* background: pink; */}
        ${'' /* height: 100%; */}
        display: inline;
      }
    }
  }
`

export default () => {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <TitleLink to="/">Billy Bunn</TitleLink>
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
    </Header>
  )
}
