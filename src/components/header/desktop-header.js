import React, { useState, useEffect } from "react"
import styled from "styled-components"

import TitleLink from "./title-link"
import NavList from "./nav-list"

const DesktopHeader = styled.header`
  align-items: center;
  background: ${props => props.theme.headerBackground};
  color: ${props => props.theme.headerColor};
  display: flex;
  flex-flow: row nowrap;
  height: 3em;
  justify-content: space-between;
  width: 100%;

  > h1 {
    align-items: center;
    display: flex;
    font-size: 1.5em;
    font-weight: 600;
    height: 100%;
    justify-content: center;
    padding: 0 1.5em;
  }

  > nav {
    flex: 1;
    height: 100%;
    max-width: 1240px;
    padding: 0 1.5em 0 0;
    > ul {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: space-evenly;
      > li {
        display: inline;
        flex: 1;
        height: 100%;
        text-align: center;
        > a {
          align-items: center;
          display: flex;
          flex: 0 1 auto;
          height: 100%;
          justify-content: center;
          font-size: 1em;
          ${"" /* height: 100%; */}
          text-decoration: none;
          text-transform: uppercase;
          ${"" /* width: 100%; */}
          transition: color 0s;
          &:hover {
            background: #f5f5f5;
            color: #202020;
            transition: color 0.3s ease-out;
          }
        }
      }
    }
  }
  > span {
    display: none;
  }
`

const activeLinkStyles = {
  background: "#f5f5f5",
  color: "#202020",
}

export default ({ routes }) => {
  return (
    <DesktopHeader>
      <TitleLink to="/">Billy Bunn</TitleLink>
      <NavList routes={routes} activeStyle={activeLinkStyles} />
    </DesktopHeader>
  )
}
