import React from "react"
import NavLink from "../../nav-link"

import Nav from "./nav.css"

export default React.forwardRef(({ routes, ...other }, ref) => (
  <Nav ref={ref} {...other}>
    <ul>
      {routes.map((route, idx) => (
        <li key={idx}>
          <NavLink route={route} />
        </li>
      ))}
    </ul>
  </Nav>
))
