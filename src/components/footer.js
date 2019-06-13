import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  background: ${props => props.theme.primaryColor};
  display: flex;
  flex-flow: column nowrap;
  > ul {
    display: flex;
    padding: 1rem 0 1rem 0;
    justify-content: space-evenly;
    > li {
      color: ${props => props.theme.secondaryColor};
      display: inline;
      > a {
        text-decoration: none;
        transition: color 0.2s ease-in-out;
        &:hover {
          color: ${props => props.theme.actionColor};
        }
      }
    }
  }
  > p {
    color: ${props => props.theme.secondaryColor};
    font-size: 80%;
    margin-bottom: 0.2rem;
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
    <p>&copy; 2019 Billy Bunn</p>
  </Footer>
)
