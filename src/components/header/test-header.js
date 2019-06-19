import React from "react"

import { Link } from "gatsby"

import { StyledHeader, StyledDiv, StyledNav, StyledLink } from "./header.css"
import TitleLink from "./title-link"
import NavList from "./nav-list"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(function(state) {
      return { isOpen: !state.isOpen }
    })
  }

  render() {
    return (
      <StyledHeader>
        <StyledDiv>
          <StyledLink to="/">Billy Bunn</StyledLink>
          <button onClick={this.handleClick}>
            {this.state.isOpen ? "Close" : "Open"}
          </button>
        </StyledDiv>
        {this.state.isOpen ? <Nav routes={this.props.routes} /> : null}
      </StyledHeader>
    )
  }
}

const Nav = ({ routes, activeStyle }) => (
  <StyledNav>
    <ul>
      {routes.map((route, idx) => (
        <li key={idx}>
          <Link to={"/" + route} activeStyle={activeStyle}>
            {route}
          </Link>
        </li>
      ))}
    </ul>
  </StyledNav>
)

export default Header
