import React from "react"
import GlobalStyle from "global.css.js"
import Header from "components/header"

export default ({ children }) => (
  <div>
    <GlobalStyle />
    <Header />
    {children}
    <footer>Footer</footer>
  </div>
)
