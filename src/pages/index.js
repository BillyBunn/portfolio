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

const WaveContainer = styled.div`
  ${"" /* z-index: -999; */}
  display: flex;
  flex-flow: row nowrap;
  ${"" /* position: absolute; */}
  width: 100%;
  > * {
    flex: 1;
    height: auto;
  }
`

const CircleSvg = styled.svg`
  animation-name: wave;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes wave {
    0% {
      ${"" /* transform:translateY(20px); */}
    }
    50% {
      transform: translateY(100px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`

const Circle = styled.circle`
  fill: none;
  stroke: black;
  stroke-width: 1;
  transform-origin: 50% 50%;
`

const SvgCircle = () => (
  <CircleSvg
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
    // preserveAspectRatio="none"
  >
    <Circle cx="50" cy="50" r="49" />
  </CircleSvg>
)

export default () => (
  <IndexLayout>
    <WaveContainer>
      {/* <Wave> */}
      {(function() {
        let circles = []
        for (let i = 0; i < 5; i++) {
          circles.push(<SvgCircle key={i} />)
        }
        return circles
      })()}
      {/* </Wave> */}
    </WaveContainer>
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
