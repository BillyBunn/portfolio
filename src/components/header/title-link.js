import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const TitleLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
`

export default ({ to, children }) => (
  <h1>
    <TitleLink to={to} activeStyle={{ color: `#2dd5c9` }}>
      {children}
    </TitleLink>
  </h1>
)
