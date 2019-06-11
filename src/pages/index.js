import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  justify-content: center;
  margin: 0 1rem;

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
  > h3 {
    font-style: italic;
    font-size: calc(0.35rem + 2vw);
    line-height: calc((0.35rem + 2vw) * 1.5);
    text-align: center;
    @media (min-width: 1180px) {
      font-size: 32px;
      line-height: calc(32px * 1.5);
    }
  }
  }
`

export default () => (
  <Layout>
    <Container>
      <h1>Billy Bunn</h1>
      <h2>
        I develop excellent applications with modern technologies and tools.
      </h2>
      <h3>
        I'm a Software Developer with a unique background in finance and an
        insatiable drive to learn.
      </h3>
      <h3>
        Learn more <Link to="/about">about me</Link>, see{" "}
        <Link to="/work">my work</Link>, or{" "}
        <Link to="/contact">get in touch.</Link>
      </h3>
    </Container>
  </Layout>
)
