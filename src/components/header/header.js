import React from "react"
import useWindowSize from "../../hooks/useWindowSize"

import DesktopHeader from "./desktop-header"
import MobileHeader from "./mobile-header"

export default ({ breakPoint }) => {
  const routes = ["about", "projects", "contact"]
  const size = useWindowSize()

  // console.log("SIZE WIDTH", size.width)
  // console.log("HELLO WORLD")

  if (size.width > breakPoint) {
    return <DesktopHeader routes={routes} />
  } else {
    return <MobileHeader routes={routes} />
  }
}
