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
        <a href="https://github.com/billybunn">GitHub</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/billybunn/">LinkedIn</a>
      </li>
      <li>
        <a href="https://twitter.com/billybunn">Twitter</a>
      </li>
    </ul>
    <p>Copyright © 2019 Billy Bunn</p>
  </Footer>
)
