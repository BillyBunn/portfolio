import React from 'react'
import { Box, Flex, Link, Text } from '@theme-ui/components'

const footerLinks = [
  { path: 'https://github.com/billybunn', name: 'GitHub' },
  { path: 'https://www.linkedin.com/in/billybunn/', name: 'LinkedIn' },
  { path: 'https://twitter.com/billybunn', name: 'Twitter' }
]

const Footer = () => (
  <Box as="footer" variant="footer" bg="muted" pt={4} pb={5}>
    <Flex sx={{ justifyContent: 'center' }}>
      {footerLinks.map(({ path, name }) => (
        <Link
          key={path}
          href={path}
          sx={{ fontWeight: 'heading', p: 3, fontSize: 2 }}
        >
          {name}
        </Link>
      ))}
    </Flex>
    <Text sx={{ textAlign: 'center', fontSize: 2 }}>
      {' '}
      © {new Date().getFullYear()}, Made by
      {` `}
      <Link href="https://billybunn.com">Billy Bunn</Link>
    </Text>
  </Box>
)

export default Footer
