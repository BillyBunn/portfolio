import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  background: lightblue;
  z-index: 998;
`

// Top Bar
export const StyledDiv = styled.div`
  ${"" /* background: turquoise; */}
  background-color: var(--primary-color);
  color: var(--secondary-color);
  display: flex;
  flex-flow: row nowrap;
  height: 3rem;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 998;
`

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: var(--action-color);
  }
`

export const StyledNav = styled.nav`
  background: lightyellow;
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  width: 100%;
  z-index: 997;
  > ul {
    display: inline-block;
    padding: 0.5rem 0;
    position: relative;
    width: 100%;
    > li {
      list-style: none;
      margin: 0 0 0.5rem;
      padding: 0;
      text-align: center;
      &:last-child {
        margin: 0;
      }
      > a {
        display: block;
        width: 100%;
      }
    }
  }
`
