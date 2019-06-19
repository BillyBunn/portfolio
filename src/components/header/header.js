import React, { useState, useEffect } from "react"

import DesktopHeader from "./desktop-header"
import MobileHeader from "./mobile-header"

export default ({ breakPoint }) => {
  const routes = ["about", "projects", "contact"]
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1025
  )

  useEffect(() => {
    const handleResize = () => {
      setWidth(typeof window !== "undefined" ? window.innerWidth : 1025)
    }

    if (typeof window !== "undefined")
      window.addEventListener("resize", handleResize)

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", handleResize)
    }
  }, [])

  return width > breakPoint ? (
    <DesktopHeader routes={routes} />
  ) : (
    <MobileHeader routes={routes} />
  )
}
