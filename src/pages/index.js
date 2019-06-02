import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"

const TagLine = styled.p`
  font-weight: bold;
  text-align: center;
`

export default () => (
  <Layout>
    <h2>Billy Bunn</h2>
    <TagLine>
      Software Developer, CA transplant, & recovering public accountant. Left
      the finance world in 2018 to pursue the dream of building software
      full-time.
    </TagLine>
  </Layout>
)
