import React, { useEffect, useState } from "react"
import useWindowSize from "../../hooks/useWindowSize"

import DesktopHeader from "./desktop-header"
import MobileHeader from "./mobile-header"

// export default ({ breakPoint }) => {
//   const routes = ["about", "projects", "contact"]
//   const size = useWindowSize()

//   // console.log("SIZE WIDTH", size.width)
//   // console.log("HELLO WORLD")

//   if (size.width > breakPoint) {
//     return <DesktopHeader routes={routes} />
//   } else if (size.width < breakPoint) {
//     return <MobileHeader routes={routes} />
//   } else {
//     return <DesktopHeader routes={routes} />
//   }
// }

export default ({ breakPoint }) => {
  const routes = ["about", "projects", "contact"]
  const size = useWindowSize()
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    if (size.width > breakPoint) {
      // console.log("size.width < breakpoint", size.width)
      setIsMobile(false)
    } else {
      // console.log("size.width < breakpoint", size.width)
      setIsMobile(true)
    }
  }, [size])

  if (isMobile) {
    return <MobileHeader routes={routes} />
  } else {
    return <DesktopHeader routes={routes} />
  }
}
