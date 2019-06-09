import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import TitleLink from "./title-link"
import NavLink from "./nav-link"

const BREAKPOINT = 768

const MobileHeader = styled.header`
  background: black;
  background: ${props => props.theme.backgroundColor};
  > nav {
    ${"" /* background-color: grey; */}
    height: 100%; /* 100% Full-height */
    right: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
    ${"" /* padding-top: 60px;  */}
    /* Place content 60px from the top */
    position: fixed; /* Stay in place */
    z-index: 1;
    /* Stay on top */
    top: 0; /* Stay at the top */
    ${"" /* transition: 0.5s;  */}
    /* 0.5 second transition effect to slide in the sidenav */
    width: 100%;
    /* 0 width - change this with JavaScript */

    > span {
      font-size: 36px;
      right: 25px;
      margin-left: 50px;
    }
  }
`

const DesktopHeader = styled.div`
  > nav {
    background-color: lightcoral;
    > span {
      display: none;
    }
    > ul {
      align-items: center;
      display: flex;
      justify-content: space-evenly;
      > li {
        display: inline;
      }
    }
  }
  > span {
    display: none;
  }
`

export default () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(width < BREAKPOINT)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      if (width > BREAKPOINT) setIsMobile(false)
    }
    window.addEventListener("resize", handleResize)
    // console.log('width', window.innerWidth)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleMenu = () => setOpen(!open)

  // let navStyle = isMobile ? { backgroundColor: "red" } : {}

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

  let Header = width < BREAKPOINT ? MobileHeader : DesktopHeader
  
  return (
    <Header>
      {/* {console.log("isMobile:", isMobile)} */}
      {/* {console.log("width", window.innerWidth)} */}
      <nav style={isMobile ? { backgroundColor: "red" } : {}}>
        <span onClick={() => toggleMenu()}>close</span>
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
      <span onClick={() => toggleMenu()}>open</span>
    </Header>
  )
}
