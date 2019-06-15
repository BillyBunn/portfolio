import React, { useState, useRef } from "react"
import { Link } from "gatsby"

export default () => {
  const [open, setOpen] = useState(false)
  const navRef = useRef()

  const openNav = () => {
    setOpen(true)
    document.addEventListener("click", handleClick)
  }
  const closeNav = () => {
    setOpen(false)
    document.removeEventListener("click", handleClick)
  }

  const toggleNav = e => {
    e.preventDefault()
    open ? closeNav() : openNav()
  }

  const handleClick = e => {
    if (navRef.current && navRef.current.contains(e.target)) return
    closeNav()
  }

  return (
    <header>
      <div>
        <Link to="/">Billy Bunn</Link>
        <button onClick={toggleNav}>Menu</button>
      </div>
      <Nav ref={navRef} style={{ display: open ? "block" : "none" }} />
    </header>
  )
}

const Nav = React.forwardRef(({ ...other }, ref) => (
  <nav ref={ref} {...other}>
    <ul>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Work</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </ul>
  </nav>
))
