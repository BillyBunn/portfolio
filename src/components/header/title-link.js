import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = styled(Link)`
  text-decoration: none;
`

export default ({ to, children }) => (
  <h1>
    <NavLink to={to}>{children}</NavLink>
  </h1>
)
