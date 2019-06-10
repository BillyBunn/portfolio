import React from "react"
import { useWindowDimensions } from "../WindowDimensionsProvider"

import MobileHeader from "./mobile-header"
import DesktopHeader from "./desktop-header"

const BREAKPOINT = 768

export default () => {
  const { width } = useWindowDimensions()
  return width > BREAKPOINT ? <DesktopHeader /> : <MobileHeader />
}
