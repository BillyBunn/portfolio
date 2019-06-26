import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "components/layout"
import { BannerImg } from "components/image"

export default props => (
  <Layout>
    <BannerImg data={props.data.primaryImg.childImageSharp.fluid} />
    <p>
      I'm a software developer based in Seattle, WA with a professional
      background in finance.
    </p>
    <p>
      Currently, I make full-stack applications with modern tools and libraries.
      I've built things with React, Node, Express, MongoDB, and more. You can
      see some of my work <Link to="/projects">here</Link>. I'm also a private
      tutor at <a href="https://www.codefellows.org/">Code Fellows</a>.
    </p>
    <p>
      Previously, I was a financial statement auditor for an international
      accounting firm. I worked face-to-face with clients in middle-market
      companies to audit their financial statements and processes. I made a
      career change to software when I realized coding was much more suited to
      my passion for solving users problems and my interest in new technologies.
      Read more about that below.
    </p>

    <hr />
    <h3>Available for Hire</h3>
    <p>
      I'm currently seeking a full-time software development role with a team in
      the greater Seattle, WA area. If you're hiring or just want to grab some
      coffee, reach out to me on{" "}
      <a href="https://www.linkedin.com/in/billybunn/">LinkedIn</a> or{" "}
      <a href="mailto:billy@billybunn.com?subject=Inquiry from BillyBunn.com">
        shoot me an email
      </a>
      .
    </p>
    <hr />
    <h3>Background</h3>
    <p>
      Right out of high school, I moved from my small town in Northern
      California up to Seattle. There, I worked in online retail, copywriting,
      and bookkeeping while earning my B.A. in Accounting from the{" "}
      <a href="https://www.uwb.edu/">University of Washington Bothell</a>.
    </p>
    <p>
      After graduating, I landed a job that gave me experience working
      face-to-face with clients and an inside-look at how large businesses are
      operated—I was a financial statement auditor at an international
      accounting firm and on the road to earning my CPA credential.
    </p>
    <p>
      I enjoyed working on small teams to serve clients and their
      users/customers, but I realized that my coding hobby was more suited for
      my passions—building solutions to people's problems and constant learning.
    </p>
    <hr />
    <h3>The Transition to Coding</h3>
    <p>
      In late 2018, I took a leap and left the finance world to study coding and
      develop software full-time. I attended an intensive 20 week software
      development bootcamp in Seattle called{" "}
      <a href="https://www.codefellows.org/">Code Fellows</a>, where I studied
      and built full-stack applications 70+ hours a week. I specialized in a
      modern JavaScript stack, but—more importantly—learned how to absorb
      documentation quickly, meet rapid deadlines, and get working results out
      the door.
    </p>
    <p>
      Since graduating from Code Fellows, I've continued to code everyday while
      working as a private tutor. I teach students one-on-one in the basics of
      programming and more advanced features of JavaScript.
    </p>
  </Layout>
)

export const pageQuery = graphql`
  query {
    primaryImg: file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
