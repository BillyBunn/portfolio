import React from "react"
import { StyledSection, StyledList, StyledLi, StyledCard } from "./tab-filter.css"

export const TabFilter = ({ children }) => <StyledSection>{children}</StyledSection>

export const Tab = ({ children, ...other }) => (
  <StyledLi {...other}>{children}</StyledLi>
)

export const TabList = ({ children }) => (
  <StyledList>
    <Tab>All</Tab>
    {children}
    <Tab>Other</Tab>
  </StyledList>
)

export const Card = ({ tags, title, children }) => (
  <StyledCard className={[...tags]}>
    <a href="#">{title}</a>
    {children}
  </StyledCard>
)
