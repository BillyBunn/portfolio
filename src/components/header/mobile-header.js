import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import TitleLink from "./title-link"
import NavList from "./nav-list"

const HeaderTopBar = styled.div`
  align-items: center;
  background: ${props => props.theme.headerBackground};
  display: flex;
  flex-flow: row nowrap;
  height: 3em;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 998;

  > h1 {
    font-size: 1.5em;
    font-weight: 600;
    padding-left: 1.5em;
  }
  > button {
    background: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    display: inline-block;
    font-size: 0.9em;
    height: 100%;
    outline: 0;
    padding: 0 1.5em 0 0;
    text-transform: uppercase;
    width: auto;
  }
`

const Header = styled.header`
  margin-bottom: 3em;
  > nav {
    background: #d8d8d8;
    color: #202020;
    display: flex;
    opacity: 1;
    position: fixed;
    width: 100%;
    z-index: 997;
    > ul {
      margin-top: 3em;
      padding: 0.5em 0;
      display: inline-block;
      width: 100%;
      opacity: 1;
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
          padding: 0.5em 1em;
          text-decoration: none;
          text-transform: uppercase;
          transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
          width: 100%;
          text-decoration: none;
          &:hover {
            background: #202020;
            color: #f5f5f5;
          }
        }
      }
    }
  }
`

const activeLinkStyles = {
  background: "#202020",
  color: "#f5f5f5",
}

export default ({ routes }) => {
  const [open, setOpen] = useState(false)
  const navRef = useRef()

  const handleClick = e => {
    if (navRef.current.contains(e.target)) return // inside click
    setOpen(false) // outside click
  }

  useEffect(() => {
    open
      ? document.addEventListener("click", handleClick)
      : document.removeEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
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
