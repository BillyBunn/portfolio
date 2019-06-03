import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    border-bottom: 2px solid #202020;
  }
`

const activeStyles = {
  borderBottom: `2px solid #202020`,
}

export default ({ to, children }) => (
  <NavLink to={to} activeStyle={activeStyles} partiallyActive={true}>
    {children}
  </NavLink>
)
