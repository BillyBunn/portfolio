import React from "react"

export default ({ children }) => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    <aside>
      <ul>
        <li>
          <a href="#">GitHub</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
    </aside>
    <main>{children}</main>
    <footer>Copyright © 2019 Billy Bunn</footer>
  </div>
)
