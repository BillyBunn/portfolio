import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import styled from 'styled-components';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';

const PrevAndNext = styled.ul`
  display: flex;
  flexwrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

// eslint-disable-next-line react/display-name
export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { title, source, date, image } = post.frontmatter;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <Head pageTitle={title} />
      <Box>
        <Title as="h3" size="medium">
          {title}
        </Title>

        <a href={source}>View source code on GitHub</a>
        <p>{date}</p>

        <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />

        {/* {post.frontmatter.image ? (
          <img
            className="headerImg"
            src={post.frontmatter.image}
            alt="project logo"
          />
        ) : null} */}
      </Box>
      <Box>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>

      <Box>
        <PrevAndNext>
          <li>
            {previous && (
              <Link to={`${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </PrevAndNext>
      </Box>
    </Layout>
  );
};
export const query = graphql`
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
`;
