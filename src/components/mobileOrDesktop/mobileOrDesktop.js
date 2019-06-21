import React, { useEffect, useState } from "react"
import useWindowSize from "../../hooks/useWindowSize"

const mobileOrDesktop = (MobileComponent, DesktopComponent) => ({
  breakPoint = 700,
  ...props
}) => {
  const size = useWindowSize()
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMobile(size.width < breakPoint)
  }, [size])

  return isMobile ? (
    <MobileComponent {...props} />
  ) : (
    <DesktopComponent {...props} />
  )
}

export default mobileOrDesktop
