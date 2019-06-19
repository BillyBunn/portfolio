import React from "react"
import { Link } from "gatsby"

export default ({ route }) => {
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
  return (
    <Link
      to={"/" + route}
      partiallyActive={true}
      activeClassName="active-nav-link"
    >
      {capitalize(route)}
    </Link>
  )
}
