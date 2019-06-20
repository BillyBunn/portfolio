import React from "react"
import NavLink from "../../nav-link"
import styled from "styled-components"
// import Nav from "./nav.css"

export default React.forwardRef(({ routes, ...other }, ref) => (
  <Nav ref={ref} {...other}>
    <ul>
      {routes.map((route, idx) => (
        <li key={idx}>
          <NavLink route={route} />
        </li>
      ))}
    </ul>
  </Nav>
))

const Nav = styled.nav`
  background-color: var(--primary-transparent);
  color: var(--secondary);
  display: flex;
  position: absolute;
  transition: display 0.2s ease-in-out;
  width: 100%;
  z-index: 999;
  > ul {
    padding: 0.5em 0;
    > li {
      margin-bottom: 0.5em;
      &:last-child {
        margin: 0;
      }
      > a {
        display: block;
        padding: 0.5em 0;
        text-align: center;
        transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
        &:hover {
          background: var(--accent-transparent);
          color: var(--secondary);
        }
        &.active-nav-link {
          background: var(--accent-transparent);
          color: var(--accent);
        }
      }
    }
  }
`
