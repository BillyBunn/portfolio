import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  &:hover {
    ${'' /* border-bottom: 2px solid #202020; */}
  }
`

export default ({ to, children }) => (
  <h1>
    <NavLink to={to}>{children}</NavLink>
  </h1>
)
