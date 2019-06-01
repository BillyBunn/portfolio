import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  > ul {
    display: flex;
    justify-content: space-evenly;
    > li {
      display: inline;
    }
  }
  > p {
    text-align: center;
  }
`

export default () => (
  <Footer>
    <ul>
      <li>
        <a href="#">GitHub</a>
      </li>
      <li>
        <a href="#">LinkedIn</a>
      </li>
      <li>
        <a href="#">Twitter</a>
      </li>
    </ul>
    <p>Copyright © 2019 Billy Bunn</p>
  </Footer>
)
