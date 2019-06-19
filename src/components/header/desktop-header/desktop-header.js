import React from "react"
import { Link } from "gatsby"
import NavLink from "../nav-link"
import { DesktopHeader } from "./desktop-header.css"

export default ({ routes }) => {
  return (
    <DesktopHeader>
      <Link to="/">Billy Bunn</Link>
      <nav>
        <ul>
          {routes.map((route, idx) => (
            <li key={idx}>
              <NavLink route={route} />
            </li>
          ))}
        </ul>
      </nav>
    </DesktopHeader>
  )
}
