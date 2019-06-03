import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"

const TagLine = styled.p`
  ${"" /* font-weight: bold; */}
  text-align: center;
`

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  justify-content: center;

  > h1 {
    font-size: calc(2rem + 8vw);
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
  > h2 {
    font-size: calc(1rem + 2vw);
    line-height: calc((1rem + 2vw) * 1.5);
    text-align: center;
    @media (min-width: 1180px) {
      font-size: 40px;
      line-height: calc(40px * 1.5);
    }
  }
`

export default () => (
  <Layout>
    <Container>
      <h1>Billy Bunn</h1>
      <h2>I'm a Software Developer with a finance background.</h2>
      {/* <p>
        Learn more about me, my qualifications, projects, or get in touch.
      </p> */}
    </Container>
  </Layout>
)
