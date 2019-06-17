import React, { useState, useEffect } from "react"

import DesktopHeader from "./desktop-header"
import MobileHeader from "./mobile-header"

export default ({ breakPoint }) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return width > breakPoint ? <DesktopHeader /> : <MobileHeader />
}
