import React from "react"
import { Link } from "gatsby"
import Nav from "./nav.css"

export default React.forwardRef(({ ...other }, ref) => (
  <Nav ref={ref} {...other}>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </Nav>
))
