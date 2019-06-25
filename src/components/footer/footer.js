import React from "react"
import Footer from "./footer.css"

export default () => (
  <Footer>
    <ul>
      <li>
        <a href="https://github.com/billybunn">GitHub</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/billybunn/">LinkedIn</a>
      </li>
      <li>
        <a href="https://twitter.com/billybunn">Twitter</a>
      </li>
    </ul>
    <p>&copy; {new Date().getFullYear()} Billy Bunn</p>
  </Footer>
)
