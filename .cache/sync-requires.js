const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-page-js": hot(preferDefault(require("/Users/billybunn/Code/projects/billybunn/src/templates/project-page.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/billybunn/Code/projects/billybunn/src/templates/page.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/billybunn/Code/projects/billybunn/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/billybunn/Code/projects/billybunn/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/billybunn/Code/projects/billybunn/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/billybunn/Code/projects/billybunn/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/billybunn/Code/projects/billybunn/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/billybunn/Code/projects/billybunn/src/pages/projects.js")))
}

