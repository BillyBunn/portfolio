import React from "react"
import { Link } from "gatsby"
import { DesktopHeader } from "./desktop-header.css"

export default () => (
  <DesktopHeader>
    <Link to="/">Billy Bunn</Link>
    <nav>
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
    </nav>
  </DesktopHeader>
)
