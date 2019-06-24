import React from "react"
import styled from "styled-components"
import Layout from "components/layout"

const Splash = styled.div`
  margin: 25vh 0;
  > * {
    text-align: center;
  }
  > h1 {
    animation: color-change 10s infinite;
    font-size: 500%;
    font-weight: 600;
    line-height: 1;

    @keyframes color-change {
      0%   {color: var(--primary);}
      10%  {color: var(--primary-light);}
      50%  {color: var(--accent);}
      90%  {color: var(--primary-light);}
      100%   {color: var(--primary);}
    }
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
