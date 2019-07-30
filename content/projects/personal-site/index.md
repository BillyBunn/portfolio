---
title: Personal Website
date: "2019-07-07"
description: My personal Gatsby.js website listing my projects.
source: https://github.com/BillyBunn/billybunn.github.io
tags: React, GraphQL
image: ./personal-site-2.png
---

My personal portfolio website built with [Gatsby.js](https://www.gatsbyjs.org/). A constant, enjoyable work-in-progress. Rather than go off of an existing portfolio template or starter-site, this project was started with a bare-bones Gatsby site and built up the project from there.

### Features
- Site pages programmatically created from different data sources with GraphQL and assigned different page templates (see [`gatsby-node.js`](https://github.com/BillyBunn/billybunn.github.io/blob/development/gatsby-node.js) where this configuration was made)
   - Site pages (e.g., `billybunn.com/about`) are programmatically created with `.js` files in the `pages/` folder (as with most Gatsby sites)
   - Project pages (e.g., `billybunn.com/projects/my-project`) are programmatically created from markdown files
- [`TabFilter` component](https://github.com/BillyBunn/billybunn.github.io/blob/development/src/components/tab-filter/tab-filter.js) for displaying projects and filtering based on custom tags. This component allowed for a much cleaner API on [the `/projects` page](https://github.com/BillyBunn/billybunn.github.io/blob/development/src/pages/projects.js) where content is populated by a static GraphQL query.
- Responsive header rendering with a custom `useWindowSize` React hook
- [`MobileHeader`](https://github.com/BillyBunn/billybunn.github.io/blob/development/src/components/header/mobile-header/mobile-header.js) menu component that closes on click outside using custom `onClickOutside` React hook
- CSS-in-JS styling with Styled Components

[See project source code on GitHub](https://github.com/BillyBunn/billybunn.github.io)

![personal website home page](./personal-site-1.png)