import styled from "styled-components"

export const DesktopHeader = styled.header`
  background-color: var(--primary);
  color: var(--secondary);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0 2em;

  > a {
    ${"" /* flex-grow: 0; */}
    align-items: center;
    display: flex;
    flex: 0 1 auto;
    height: 100%;
    justify-content: center;
    padding: 1em 2em;
  }
  > nav {
    flex: 1 0 auto;
    > ul {
      align-items: center;
      display: flex;
      flex-flow: row nowrap;
      flex: 1 0 auto;
      height: 100%;
      justify-content: flex-end;
      > li {
        > a {
          align-items: center;
          display: flex;
          flex: 0 1 auto;
          height: 100%;
          justify-content: center;
          padding: 1em 2em;
          &:hover {
            background: var(--primary-light);
          }
          &.active-nav-link {
            background: var(--primary-light);
            color: var(--accent);
          }
        }
      }
    }
  }
`
