import React from "react"
import { useWindowDimensions } from "../WindowDimensionsProvider"

import MobileHeader from "./mobile-header"
import DesktopHeader from "./desktop-header"
import TestHeader from "./test-header"

const BREAKPOINT = 768

// export default () => {
//   const { width } = useWindowDimensions()
//   const routes = ["about", "work", "contact"]
//   return width < BREAKPOINT ? (
//     <MobileHeader routes={routes} />
//   ) : (
//     <DesktopHeader routes={routes} />
//   )
// }
const routes = ["about", "work", "contact"]
export default () => <TestHeader routes={routes} />
