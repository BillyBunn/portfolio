import React, { useContext, useState } from "react"
import {
  StyledSection,
  StyledList,
  StyledLi,
  StyledCard,
  StyledDiv,
} from "./tab-filter.css"

// Parent div and context provider -------------------------------------------------------------
const TabFilterContext = React.createContext()
export const TabFilter = ({ children, tags }) => {
  const [currentTab, setCurrentTab] = useState("All")
  const changeTab = tab => {
    setCurrentTab(tab)
  }

  return (
    <TabFilterContext.Provider value={{ changeTab, currentTab, tags }}>
      <h3>Current: {currentTab}</h3>
      <StyledSection>
        <TabList />
        <StyledDiv>{children}</StyledDiv>
      </StyledSection>
    </TabFilterContext.Provider>
  )
}

// Single "tab" in the tab list -------------------------------------------------------------
export const Tab = ({ children, tag = children }) => {
  const { changeTab, currentTab } = useContext(TabFilterContext)

  const handleClick = e => {
    e.preventDefault()
    // console.dir(e.target)
    changeTab(e.target.innerText)
  }

  const current = currentTab === tag

  const currentTabStyle = {
    backgroundColor: `var(--primary-light)`,
    color: `var(--accent)`,
  }

  return (
    <StyledLi style={current ? currentTabStyle : null} onClick={handleClick}>
      {children}
    </StyledLi>
  )
}

// List of tabs; one for each tag -------------------------------------------------------------
export const TabList = () => {
  const { tags } = useContext(TabFilterContext)
  return (
    <StyledList>
      <Tab>All</Tab>
      {tags.map((tag, idx) => (
        <Tab key={idx}>{tag}</Tab>
      ))}
    </StyledList>
  )
}

// Single "item" that is hidden/shown depending on the current tab ---------------------------
export const TabFilterItem = ({ tags = [], title, children }) => {
  const { currentTab } = useContext(TabFilterContext)

  const show =
    currentTab === "All" ? true : tags.some(tag => currentTab === tag)

  return (
    <StyledCard style={{ display: show ? `block` : `none` }}>
      <a href="#">{title}</a>
      {children}
    </StyledCard>
  )
}
