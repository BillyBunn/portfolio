import React from "react"
import { Link } from "gatsby"

const NavLink = ({
  to,
  children,
  activeStyle,
}) => (
  <Link
    to={to}
    activeStyle={activeStyle}
    activeClassName="active-link"
    partiallyActive={true}
  >
    {children}
  </Link>
)

const NavList = React.forwardRef(({ routes, activeStyle, ...other }, ref) => (
  <nav ref={ref} {...other}>
    <ul>
      {routes.map((route, idx) => (
        <li key={idx}>
          <NavLink to={"/" + route} activeStyle={activeStyle}>
            {route}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
))

export default NavList
