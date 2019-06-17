import styled from "styled-components"

export default styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  > header {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
  }
  > footer {
    flex-shrink: 0;
  }
`
