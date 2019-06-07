import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import TitleLink from "./title-link"
import NavLink from "./nav-link"

const Header = styled.header`
> nav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}
  ${"" /* Desktop */}
  ${"" /* > nav {
    > ul {
      align-items: center;
      display: flex;
      justify-content: space-evenly;
      > li {
        display: inline;
      }
    }
  } */}
`

export default () => {
  const openMenu = () => {

  }

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
      <span onClick="openNav()">open</span>
    </Header>
  )
}
