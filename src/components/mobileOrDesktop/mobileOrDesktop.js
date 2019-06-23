import React, { useEffect, useState } from "react"
import useWindowSize from "../../hooks/useWindowSize"

const mobileOrDesktop = (MobileComponent, DesktopComponent) => ({
  breakPoint = 700,
  ...props
}) => {
  const size = useWindowSize()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(size.width < breakPoint)
  })

  return !isMobile ? (
    <DesktopComponent {...props} />
  ) : (
    <MobileComponent {...props} />
  )
}

export default mobileOrDesktop
