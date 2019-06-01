import React from "react"

import Header from "../header"
import Footer from "../footer"

export default ({ children }) => (
  <>
    <Header />

    <main>{children}</main>

    <Footer />
  </>
)
