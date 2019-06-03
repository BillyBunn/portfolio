import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import TitleLink from "./title-link"
import NavLink from "./nav-link"

const Header = styled.header`
  > nav {
    > ul {
      align-items: center;
      display: flex;
      justify-content: space-evenly;
      > li {
        display: inline;
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Header>
      <nav>
        <ul>
        <li>
            <TitleLink to="/">Home</TitleLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/work">Work</NavLink>
          </li>
          {/* <li>
            <TitleLink to="/">{data.site.siteMetadata.title}</TitleLink>
          </li> */}
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </Header>
  )
}
