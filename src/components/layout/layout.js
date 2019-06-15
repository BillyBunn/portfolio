import React from "react"
import { Helmet } from "react-helmet"
import styled, { ThemeProvider } from "styled-components"

// Context provider to give all components access to viewport height & width
import WindowDimensionsProvider from "../WindowDimensionsProvider"

import Header from "../header"
import Footer from "../footer"

const Layout = styled.div`
  --primary-color: #202020; /* black */
  --secondary-color: #f5f5f5; /* white */
  --action-color: #2dd5c9; /* light blue */
  --font-family: "Fira Sans", sans-serif;
  --base-font-size: 2.03vw;
  --mobile-font-size: 1.13em;
  --max-font-size: 1.3em;
  --base-line-height: 1.45;
  --base-font-weight: 400;
  --bold-font-weight: 600;
  /* titles */
  --title-font-size: 150%;
  /* headings */
  --heading-font-size: 109%;
  --heading-font-weight: 600;
  --heading-letter-spacing: 0.09em;
  --heading-text-transform: uppercase;

  /* Makes content 100% height */
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;

  background: var(--secondary-color);
  color: var(--primary-color);
  font-family: var(--font-family);
  font-size: var(--base-font-size);
  font-weight: var(--base-font-weight);
  line-height: var(--base-line-height);
  text-rendering: optimizeLegibility;

  /* Keeps "visited" links from changing color */
  a,
  a:visited {
    color: inherit;
    text-decoration-color: var(--action-color);
    transition: color 0.2s ease-in-out;
    &:hover {
      color: var(--action-color);
    }
  }

  h1 {
    font-size: var(--title-font-size);
    font-weight: var(--bold-font-weight);
  }

  > header {
    flex: 0 0 auto;
  }

  > main {
    flex: 1 0 auto;
    max-width: 80vw;
    margin: 0 auto;
    padding: 2rem 0;
    width: 100%;
    h1,
    h2,
    h3,
    h4,
    h5 {
      --heading-font-size: 109%;
      --heading-font-weight: 600;
      --heading-letter-spacing: 0.09em;
      --heading-text-transform: uppercase;
      font-size: var(--heading-font-size);
      font-weight: var(--heading-font-weight);
      letter-spacing: var(--heading-letter-spacing);
      line-height: var(--base-line-height);
      text-transform: var(--heading-text-transform);
    }

    p,
    li {
      margin-bottom: 1em;
    }
  }

  hr {
    border: 0;
    height: 2px;
    background: #333;
    background-image: linear-gradient(
      to right,
      var(--action-color),
      var(--secondary-color)
    );
  }

  > footer {
    flex: 0 0 auto;
  }

  /* min font-size at 768 width */
  @media all and (max-width: 768px) {
    font-size: var(--mobile-font-size);
    /* start scaling content width */
    > main {
      max-width: none;
      /*  width: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))); */
      width: calc(304px + (614 - 304) * ((100vw - 320px) / (768 - 320)));
    }
  }

  /* max font-size at 1440 width */
  @media all and (min-width: 1024px) {
    font-size: var(--max-font-size);
    > main {
      max-width: calc(1024px * 0.8);
    }
  }
`

export default ({ children, ...other }) => (
  <WindowDimensionsProvider>
      <Layout {...other}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,600,600i,900&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <Header />
        <main>{children}</main>
        <Footer />
      </Layout>
  </WindowDimensionsProvider>
)
