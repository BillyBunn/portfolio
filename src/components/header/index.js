import React from "react"
import { useWindowDimensions } from "../WindowDimensionsProvider"

import MobileHeader from "./mobile-header"
import DesktopHeader from "./desktop-header"

const BREAKPOINT = 768

export default () => {
  const { width } = useWindowDimensions()
  const routes = ["about", "work", "blog", "contact", "foo"]
  return width > BREAKPOINT ? (
    <DesktopHeader routes={routes} />
  ) : (
    <MobileHeader routes={routes} />
  )
}