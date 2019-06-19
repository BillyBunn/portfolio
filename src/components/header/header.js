import React, { useState, useEffect } from "react"
import useWindowSize from "../../hooks/useWindowSize"

import DesktopHeader from "./desktop-header"
import MobileHeader from "./mobile-header"

export default ({ breakPoint }) => {
  const routes = ["about", "projects", "contact"]
  const size = useWindowSize()
  
  return size.width > breakPoint ? (
    <DesktopHeader routes={routes} />
  ) : (
    <MobileHeader routes={routes} />
  )
}
