import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const TitleLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    ${'' /* border-bottom: 2px solid #202020; */}
  }
`

export default ({ to, children }) => (
  <h1>
    <TitleLink to={to}>
      {children}
    </TitleLink>
  </h1>
)
