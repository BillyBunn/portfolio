import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
  ${"" /* align-items: center;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  justify-content: center;
  margin: 0 1rem; */}
`
const IndexLayout = styled(Layout)`
  > main {
    ${"" /* > div {
      line-height: 1;
      font-size: 2em;
      font-weight: 600;
      text-align: center;
      text-transform: uppercase;
      background: red;
      width: 50vw;
      > h1 {
        background: turquoise;
      }
    } */}
  }
`

const Wave = styled.div`
  display: flex;
  flex-flow: row nowrap;
  > * {
    flex: 1;
  }
`

const Circle = styled.svg`
  > circle {
    fill: red;
    stroke: black;
  }
`
const SvgCircle = () => (
  <Circle viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="49" stroke-width="1" />
  </Circle>
)

export default () => (
  <IndexLayout>
    <Wave>
      {(function() {
        let circles = []
        for (let i = 0; i < 20; i++) {
          circles.push(<SvgCircle key={i} />)
        }
        return circles
      })()}
    </Wave>
    {/* <div>
      <h1>Billy Bunn</h1>
    </div> */}
    {/* <h2>I use code to solve problems and serve people.</h2> */}
    <p>
      I'm a Software Developer with a unique background in finance and an
      appetite for learning. Read more <Link to="/about">about me</Link>, see{" "}
      <Link to="/work">my work</Link>, or{" "}
      <Link to="/contact">get in touch.</Link>
    </p>
  </IndexLayout>
)
