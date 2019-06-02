import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"

const TagLine = styled.p`
  font-weight: bold;
`

export default () => (
  <Layout>
    <h2>About</h2>
    <div>
      <img src="https://via.placeholder.com/150" alt="headshot" />
      <p>
        Right out of high school, I moved from Northern California to Seattle. I
        spent several years working in online retail, copywriting, and
        bookkeeping while getting my BA in accounting from the University of
        Washington. After graduating, I went straight to work for an
        international accounting firm as a financial statement auditor. There, I
        worked on client teams to serve middle-market companies in a number of
        industries. In late 2018, I left the finance world to pursue my passion
        and study coding full-time.
      </p>
      <p>
        Currently looking to join a team where I can stretch myself, learn from
        veteran developers, and have my code held to a high standard. I'm
        experienced with the MERN stack (MongoDB, Express, React, Node.js), but
        always hungry to learn more tools and languages.
      </p>
    </div>
  </Layout>
)
