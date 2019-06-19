import React from "react"
import styled from "styled-components"
import Layout from "components/layout"

const Splash = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;

  ${"" /* width: 100vw; */}
  > * {
    text-align: center;
  }
  > h1 {
    font-size: 500%;
  }
  > h2 {
    font-size: 130%;
    font-weight: 400;
  }
  > p {
  }
`

export default () => (
  <Layout>
    <Splash>
      <h1>Billy Bunn</h1>
      <h2>Software Developer and former Public Accountant</h2>
    </Splash>
  </Layout>
)
