import styled from "styled-components"

export const MenuBar = styled.div`
  align-items: center;
  background: var(--primary);
  color: var(--secondary);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 1em;
`

export const MenuButton = styled.button`
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  height: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  width: auto;
`

export const MobileHeader = styled.header`
  ${"" /* width: 100%; */}
`

export const MobileNav = styled.nav`
  background-color: var(--primary-transparent);
  color: var(--secondary);
  display: flex;
  position: absolute;
  transition: display 0.2s ease-in-out;
  width: 100%;
  z-index: 999;
  > ul {
    padding: 0.5em 0;
    > li {
      margin-bottom: 0.5em;
      &:last-child {
        margin: 0;
      }
      > a {
        display: block;
        padding: 0.5em 0;
        text-align: center;
        transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
        &:hover {
          background: var(--accent-transparent);
          color: var(--secondary);
        }
        &.active-nav-link {
          background: var(--accent-transparent);
          color: var(--accent);
        }
      }
    }
  }
`
