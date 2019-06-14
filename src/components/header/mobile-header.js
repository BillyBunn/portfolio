import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import TitleLink from "./title-link"
import NavList from "./nav-list"

const HeaderTopBar = styled.div`
  align-items: center;
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor};
  display: flex;
  flex-flow: row nowrap;
  height: 3em;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 998; /* above nav */

  > h1 {
    padding-left: 1.5em;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${props => props.theme.actionColor};
    }
  }
  > button {
    /* resets button defaults, makes similar to desktop nav links */
    background: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    display: inline-block;
    font: inherit;
    height: 100%;
    margin: 0;
    outline: 0;
    padding: 0 1.5em 0 0;
    text-transform: uppercase;
    vertical-align: baseline;
    width: auto;
  }
`

const Header = styled.header`
  margin-bottom: 3em; /* equal to height of top bar */
  > nav {
    background-color: rgba(32, 32, 32, 0.9);
    color: ${props => props.theme.secondaryColor};
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 997; /* behind header top bar */
    > ul {
      display: inline-block;
      margin-top: 3em;
      padding: 0.5em 0;
      width: 100%;

      > li {
        list-style: none;
        margin: 0 0 0.5em;
        padding: 0;
        text-align: center;
        &:last-child {
          margin: 0;
        }
        > a {
          display: block;
          opacity: 1;
          padding: 0.5em 1em;
          text-decoration: none;
          text-transform: uppercase;
          transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
          width: 100%;
          &.active-link {
            background-color: rgba(45, 213, 201, 0.65);
          }
          &:hover {
            background: ${props => props.theme.actionColor};
            color: ${props => props.theme.primaryColor} !important;
          }
        }
      }
    }
  }
`

const activeLinkStyles = {
  // background: "#2dd5c9",
  // backgroundColor: "rgba(45, 213, 201, 0.9)",
  // color: "#2dd5c9",
}

export default ({ routes }) => {
  const [open, setOpen] = useState(false)
  const navRef = useRef()

  const handleClick = e => {
    if (navRef.current.contains(e.target)) return // inside click
    setOpen(false) // outside click
  }

  const addClickListen = document.addEventListener("click", handleClick)
  const removeClickListen = document.removeEventListener("click", handleClick)

  useEffect(() => {
    open ? addClickListen : removeClickListen
    return () => removeClickListen
  }, [open])

  const toggleMenu = () => setOpen(!open)

  return (
    <Header>
      <HeaderTopBar>
        <TitleLink to="/">Billy Bunn</TitleLink>
        <button onClick={() => toggleMenu()}>Menu</button>
      </HeaderTopBar>

      <NavList
        activeStyle={activeLinkStyles}
        ref={navRef}
        routes={routes}
        style={{ display: open ? "flex" : "none" }}
      />
    </Header>
  )
}
