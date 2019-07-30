---
title: Personal Website
date: "2019-07-07"
description: My personal Gatsby.js website listing my projects.
source: https://github.com/BillyBunn/billybunn.github.io
tags: React, GraphQL
image: ./personal-site-2.png
---

My personal portfolio website built with [Gatsby.js](https://www.gatsbyjs.org/). A fun venture into the JAM stack and a constant work-in-progress.

Rather than go off of an existing portfolio template or starter-site, this project was started with a bare-bones Gatsby site and built up from there. The site is currently deployed with GitHub pages [here](https://billybunn.com/).

### Features

- Site pages programmatically created from different data sources with GraphQL and assigned different page templates (see [`gatsby-node.js`](https://github.com/BillyBunn/billybunn.github.io/blob/development/gatsby-node.js) where this configuration was made)
  - Site pages (e.g., `billybunn.com/about`) are programmatically created with `.js` files in the `pages/` folder (as with most Gatsby sites)
  - Project pages (e.g., `billybunn.com/projects/my-project`) are programmatically created from markdown files
- Pagination between project pages
- [`TabFilter` component](https://github.com/BillyBunn/billybunn.github.io/blob/development/src/components/tab-filter/tab-filter.js) for displaying projects and filtering based on custom tags. This component allowed for a much cleaner API on [the `/projects` page](https://github.com/BillyBunn/billybunn.github.io/blob/development/src/pages/projects.js) where content is populated by a static GraphQL query.
- Responsive header rendering with a custom `useWindowSize` React hook
- [`MobileHeader`](https://github.com/BillyBunn/billybunn.github.io/blob/development/src/components/header/mobile-header/mobile-header.js) menu component that closes on click outside using custom `onClickOutside` React hook
- CSS-in-JS styling with Styled Components

[See project source code on GitHub](https://github.com/BillyBunn/billybunn.github.io)

![personal website home page](./personal-site-1.png)

### Resources and References

Inspiration and direction for certain features was gathered from the sources credited below.

- [Official Gatsby.js Tutorial](https://www.gatsbyjs.org/tutorial/)
- [Gatsby Starter Blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)
- [Gatsby Starter Universal](https://www.gatsbyjs.org/starters/fabe/gatsby-universal/)
- [Theming in React with Styled Components](https://medium.com/@rossbulat/creating-themes-in-react-with-styled-components-6fce744b4e54)
- [Simplifying Responsive Layouts with React Hooks](https://hackernoon.com/simplifying-responsive-layouts-with-react-hooks-19db73893a7a)
- [Making a Gatsby Site with Multiple Content Types](https://chipcullen.com/making-multiple-content-types-in-gatsby/)
- [useHooks](https://usehooks.com/)
- [A gentle Introduction to React's Higher Order Components](https://hackernoon.com/simplifying-responsive-layouts-with-react-hooks-19db73893a7a)
