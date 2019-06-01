import React from "react"
import styled from "styled-components"

const Section = styled.section`
  border-top: 2px solid black;
  ${'' /* height: 100vh; */}
  &:nth-child(even) {
    background: lightgrey;
  }
`

export default ({ children }) => <Section>{children}</Section>
