import React, { useState } from "react"

export default () => {
  const [displayMenu, setDisplayMenu] = useState(false)

  const toggleNav = e => {
    e.preventDefault()
    setDisplayMenu(!displayMenu)
  }

  return (
    <header>
      <h2>
        <a href="#">Billy Bunn</a>
      </h2>

      <button onClick={toggleNav}>{displayMenu ? "Close" : "Menu"}</button>

      <nav style={{ display: displayMenu ? "block" : "none" }}>
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
  )
}
