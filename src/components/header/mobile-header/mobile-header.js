import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import { MenuBar, MenuButton } from "./mobile-header.css"
import Nav from "./nav"

export default () => {
  const navRef = useRef()
  const handleClick = e => {
    if (navRef.current && navRef.current.contains(e.target)) return
    closeNav()
  }

  const [listening, setListening] = useState(false)
  useEffect(() => {
    if (listening) return () => removeListener()
    return () => {
      if (listening) return () => removeListener()
    }
  })

  const addListener = () => {
    document.addEventListener("click", handleClick)
    setListening(true)
  }
  const removeListener = () => {
    document.removeEventListener("click", handleClick)
    setListening(false)
  }

  const [open, setOpen] = useState(false)
  const openNav = () => {
    setOpen(true)
    addListener()
  }
  const closeNav = () => {
    setOpen(false)
    removeListener()
  }

  const toggleNav = e => {
    e.preventDefault()
    console.log("toggleNav")
    open ? closeNav() : openNav()
  }

  return (
    <header>
      <MenuBar>
        <Link to="/">Billy Bunn</Link>
        <MenuButton
          onClick={toggleNav}
          style={{ color: open ? "inherit" : "var(--accent)" }}
        >
          Menu
        </MenuButton>
      </MenuBar>
      <Nav ref={navRef} style={{ display: open ? "block" : "none" }} />
    </header>
  )
}
