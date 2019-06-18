import styled from "styled-components"

export const StyledList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  ${"" /* margin: 0 0 10px; */}
`

export const StyledLi = styled.li`
  /* For specificity */
  /*https://www.styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity */
  &&& {
    background: var(--secondary);
    cursor: pointer;
    margin-bottom: 0;
    padding: 6px 12px;
  }
`

export const StyledCard = styled.div`
  background: var(--primary);
  color: var(--secondary);
  margin: 0 0.5em 0.5em 0.5em;
  padding: 0.5em;
`

export const StyledSection = styled.section``
export const StyledDiv = styled.div`
  background: var(--primary-light);
  display: flex;
  flex-flow: column nowrap;
  padding-top: 0.5em;
`
