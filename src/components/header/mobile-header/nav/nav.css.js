import styled from "styled-components"

export default styled.nav`
  background-color: var(--primary-transparent);
  color: var(--secondary);
  display: flex;
  position: fixed;
  transition: display 0.2s ease-in-out;
  width: 100%;
  z-index: 998;
  > ul {
    margin: 0.5em 0;
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
          color: var(--accent);
        }
      }
    }
  }
`
