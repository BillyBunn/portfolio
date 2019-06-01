import React, { useState } from "react"
import styled from "styled-components"

const Header = styled.header`
  justify-content: space-between;
  display: flex;
  flex-flow: row nowrap;
`

const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  height: 100%;
  left: 0;
  overflow-x: hidden;
  position: fixed;
  width: 0;
  top: 0;
  z-index: 1;
  ${"" /* transition: 0.5s; */}
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
  > nav {
    position: relative;
    text-align: center;
    top: 25%;
    width: 100%;
  }
`

export default () => {
  const [displayMenu, setDisplayMenu] = useState(true)

  const toggleNav = e => {
    e.preventDefault()
    setDisplayMenu(!displayMenu)
  }

  return (
    <Header>
      <h2>
        <a href="#">Billy Bunn</a>
      </h2>

      <Overlay style={{ width: displayMenu ? "100%" : "0%" }}>
        <button onClick={toggleNav}>Close</button>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </Overlay>

      <button onClick={toggleNav}>Menu</button>
    </Header>
  )
}
