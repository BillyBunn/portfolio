import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
  ${"" /* align-items: center; */}
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  padding: 0 1rem;
  ${"" /* justify-content: center; */}
  > h2 {
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0 auto;
    text-transform: uppercase;
  }
  > h4 {
    
  }
  > p {
    font-size: 1rem;
    line-height: calc(1rem * 1.5);
    margin: 0 0 1rem 0;
  }
`

export default () => (
  <Layout>
    <Container>
      <h2>About</h2>
      {/* <img src="https://via.placeholder.com/150" alt="headshot" /> */}
      <h4>Hi there, I'm Billy.</h4>

      <p>
        I'm a full-stack web developer specializing in modern JavaScript tools
        and libraries. I've built things with React, Node, Express, MongoDB, and
        more.
      </p>

      <h4>My path to software development was unconventional.</h4>

      <p>
        I landed a great job out of college at an international accounting firm
        as a financial statement auditor.
      </p>

      <p>I worked with clients in a number of industries</p>

      <p>I'm a software developer with a background in finance.</p>
      <p>
        I completed a B.A. in Accounting from the University of Washington and
        went straight to work for an international accounting firm as a
        financial statement auditor.
      </p>
      <p />
    </Container>
  </Layout>
)
