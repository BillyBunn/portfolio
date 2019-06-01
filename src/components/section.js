import React from "react"
import styled from "styled-components"

const Section = styled.section`
`

export default ({ id, children }) => <Section id={id}>{children}</Section>
