import React from 'react'
import { Link as NavLink } from 'gatsby'
import { Flex, Link, Box, Text } from '@theme-ui/components'
import { lighten } from 'polished'
import theme from '../gatsby-plugin-theme-ui'

const Header = ({
  routes = [
    { path: '/about', name: 'About' },
    { path: '/projects', name: 'Projects' },
    { path: '/contact', name: 'Contact' }
  ]
}) => (
  <Box as="header">
    <Box mx="auto" py={3} sx={{ width: ['100%', null, '48em'] }}>
      <Link
        as={NavLink}
        activeClassName="active"
        to="/"
        sx={{
          color: 'inherit',
          '&.active': {
            color: 'blue'
          }
        }}
        variant="logo"
        mr="auto"
        fontSize={4}
      >
        Billy Bunn{' '}
        <Text
          sx={{ fontWeight: 'body' }}
          color={lighten(0.25, theme.colors.primary)}
        >
          Software Developer
        </Text>
      </Link>
      <Flex as="nav">
        {routes.map(({ name, path }) => (
          <Link
            key={path}
            as={NavLink}
            activeClassName="active"
            to={path}
            variant="nav"
            sx={{
              color: 'inherit',
              '&.active': {
                color: 'primary'
              }
            }}
          >
            {name}
          </Link>
        ))}
      </Flex>
    </Box>
  </Box>
)

export default Header
