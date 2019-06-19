import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import TitleLink from "./title-link"
import NavList from "./nav-list"

const HeaderTopBar = styled.div`
  align-items: center;
  background: var(--primary-color);
  color: var(--secondary-color);
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
      color: var(--action-color);
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
    color: var(--secondary-color);
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
            background: var(--action-color);
            color: var(--primary-color) !important;
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
  const [listening, setListening] = useState(false)

  const navRef = useRef()

  const handleClick = e => {
    console.log("handleClick")
    if (navRef.current.contains(e.target)) return // inside click
    setOpen(false) // outside click
  }

  const addClickListen = () => {
    console.log("added click listen")
    document.addEventListener("click", handleClick)
    setListening(true)
  }

  const removeClickListen = () => {
    console.log("removed click listen")
    document.removeEventListener("click", handleClick)
    setListening(false)
  }

  const cleanUp = () => {
    if (!open) removeClickListen()
  }

  useEffect(() => {
    // open ? addClickListen() : removeClickListen()
    // if (open && !listening) addClickListen()
    if (open) addClickListen()

    // return () => removeClickListen2()
    return cleanUp()
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
