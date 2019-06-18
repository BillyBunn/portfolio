import styled from "styled-components"

export default styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;

  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;

  /* Keeps "visited" links from changing color */
  a,
  a:visited {
    color: inherit;
    text-decoration-color: var(--accent);
    transition: color 0.2s ease-in-out;
    &:hover {
      color: var(--accent);
    }
  }

  h1 {
    font-size: 200%;
  }

  h2,
  h3 {
    font-size: 108%;
    font-weight: 600;
  }
  hr {
    border: 0;
    height: 2px;
    background: var(--accent);
    ${"" /* background-image: linear-gradient(to right, var(--accent), var(--primary)); */}
  }

  > header {
    flex-shrink: 0;
  }

  main {
    flex-grow: 1;
    line-height: var(--line-height);
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0.5em;
    p,
    li {
      margin-bottom: 1em;
    }
  }
  > footer {
    flex-shrink: 0;
  }
`
