import React, { useContext, useState, useRef } from "react"
import {
  StyledSection,
  StyledList,
  StyledLi,
  StyledCard,
} from "./tab-filter.css"

// ENTIRE SECTION -------------------------------------------------------------
const TabFilterContext = React.createContext()
export const TabFilter = ({ children, tags }) => {
  const [currentTab, setCurrentTab] = useState("All")
  const changeTab = tab => {
    setCurrentTab(tab)
  }

  return (
    <TabFilterContext.Provider value={{ changeTab, currentTab, tags }}>
      <StyledSection>{children}</StyledSection>
    </TabFilterContext.Provider>
  )
}

// SINGLE TAB LIST ITEM ----------------------------------------------------------
export const Tab = ({ children, tag = children, ...other }) => {
  const { changeTab, currentTab } = useContext(TabFilterContext)

  const handleClick = e => {
    e.preventDefault()
    console.log("clicked", e)
    changeTab(e.target.innerText)
  }

  const current = currentTab === tag ? true : false

  return (
    <StyledLi
      style={{ backgroundColor: current ? `var(--accent)` : null }}
      onClick={handleClick}
      {...other}
    >
      {children}
    </StyledLi>
  )
}

// UNORDERED LIST ======================================================
export const TabList = ({ children }) => {
  return (
    <StyledList>
      <Tab current>All</Tab>
      {children}
      <Tab>Other</Tab>
    </StyledList>
  )
}

export const Card = ({ tags = [], title, children }) => {
  const { currentTab } = useContext(TabFilterContext)

  const show = tags.includes(currentTab)
  // console.log('TAGS', typeof tags)

  return (
    <StyledCard style={{ display: show ? `block` : `none` }}>
      <a href="#">{title}</a>
      {children}
    </StyledCard>
  )
}
