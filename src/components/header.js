import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = styled.header`
  > nav {
    > ul {
      display: flex;
      justify-content: space-evenly;
      > li {
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
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Header>
  )
}
