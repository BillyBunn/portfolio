// https://hackernoon.com/simplifying-responsive-layouts-with-react-hooks-19db73893a7a
// NOTE: "window" is a browser global and not defined at build

import React, { createContext, useContext, useState, useEffect } from "react"

const WindowDimensionsCtx = createContext(null)

const WindowDimensionsProvider = ({ children }) => {
  if (typeof window !== "undefined") {
  }
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1025,
    height: typeof window !== "undefined" ? window.innerHeight : 1025,
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: typeof window !== "undefined" ? window.innerWidth : 1025,
        height: typeof window !== "undefined" ? window.innerHeight : 1025,
      })
    }

    if (typeof window !== "undefined")
      window.addEventListener("resize", handleResize)

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <WindowDimensionsCtx.Provider value={dimensions}>
      {children}
    </WindowDimensionsCtx.Provider>
  )
}

export default WindowDimensionsProvider

export const useWindowDimensions = () => useContext(WindowDimensionsCtx)
