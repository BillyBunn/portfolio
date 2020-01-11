/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { Box } from '@theme-ui/components'
// import GlobalStyle from '../GlobalStyle'
// import ThemeProvider from '../theme'
import Header from './Header'
import GlobalStyles from '../GlobalStyles'

import Footer from './Footer'
export default ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Styled.root>
        <Header />
        <Box as="main" sx={{ minHeight: '100vh' }}>
          <Box mx="auto" sx={{ width: ['100%', null, '48em'] }}>
            {children}
          </Box>
        </Box>
        <Footer />
      </Styled.root>
    </>
  )
}
