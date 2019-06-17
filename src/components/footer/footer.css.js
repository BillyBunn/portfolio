import styled from "styled-components"

export default styled.footer`
  background: var(--primary);
  color: var(--secondary);
  > ul {
    display: flex;
    padding: 1em 0;
    justify-content: space-evenly;
    > li {
      > a {
        /* text-decoration: none; */
      }
    }
  }
  > p {
    margin-bottom: 0.2rem;
    text-align: center;
  }
`
