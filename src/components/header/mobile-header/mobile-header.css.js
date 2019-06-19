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
  ${'' /* width: 100%; */}
`
