# Personal Website

My personal portfolio website built with Gatsby.js. A constant, enjoyable work-in-progress. Rather than go off of an existing portfolio template or starter-site, this project was started with a bare-bones Gatsby site and built up the project from there.

### Features
- Site pages programmatically created from different data sources with GraphQL and assigned different page templates (see `gatsby-node.js` where this configuration was made)
   - Site pages (e.g., `billybunn.com/about`) are programmatically created with `.js` files in the `pages/` folder (as with most Gatsby sites)
   - Project pages (e.g., `billybunn.com/projects/my-project`) are programmatically created from markdown files
- `TabFilter` component for displaying projects and filtering based on custom tags. This component allowed for a much cleaner API on the `projects` page where content is populated by a static GraphQL query.
- Responsive header rendering with a custom `useWindowSize` React hook
- Mobile menu that closes on click outside using custom `onClickOutside` React hook
- CSS-in-JS styling with Styled Components