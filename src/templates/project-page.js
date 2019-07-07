import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/layout"
// import SEO from "../components/seo"

const PrevAndNext = styled.ul`
  display: flex;
  flexwrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const ProjectPageLayout = styled(Layout)`
  img.headerImg {
    width: 4em;
  }
`

const ProjectContent = styled.article`
  ul {
    list-style: disc;
  }
  strong {
    font-weight: 600;
  }
`

const PageHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 1em;
  > a {
    text-decoration: underline;
    text-decoration-color: var(--accent);
  }
  > img {
    height: auto;
    margin: 0 auto;
    width: 30%;
  }
`

const ProjectPageTemplate = props => {
  const post = props.data.markdownRemark
  const sourceCode = post.frontmatter.source
  const headerImg = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.fluid.originalImg
    : null
  // console.log(post.frontmatter)
  const { previous, next } = props.pageContext

  return (
    <ProjectPageLayout>
      <PageHeader>
        <h2>{post.frontmatter.title}</h2>
        <a href={sourceCode}>View source code on GitHub</a>
        <p>{post.frontmatter.date}</p>
        {headerImg ? (
          <img className="headerImg" src={headerImg} alt="project logo" />
        ) : null}
      </PageHeader>
      <ProjectContent dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      {/* <Bio /> */}

      <PrevAndNext>
        <li>
          {previous && (
            <Link to={`/${previous.fields.path}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`/${next.fields.path}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </PrevAndNext>
    </ProjectPageLayout>
  )
}

export default ProjectPageTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        source
        image {
          childImageSharp {
            fluid {
              originalImg
            }
          }
        }
      }
    }
  }
`
