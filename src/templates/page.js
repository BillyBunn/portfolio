import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import styled from 'styled-components';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';
import {
  accent,
  primary,
  primaryLight,
  secondary,
  secondaryLight,
} from '../constants/theme';

export const Content = styled.article`
  line-height: 1.4;

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-size: 110%;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  img {
    margin-top: 1em;
  }
  ul {
    list-style: disc;
    margin-left: 1.5em;
    li {
      margin-bottom: 0.5rem;
    }
  }
  strong {
    font-weight: 600;
  }

  code {
    padding: 0.2rem 0.3rem;
    background: ${secondary};
    font-size: 85%;
    line-height: 1.45;
    border-radius: 3px;
    color: ${primaryLight};
    border: 1px solid #ddd;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;
  }
  a {
    > code {
      color: ${accent};
      border: none;
      background: transparent;
    }
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;

    > code {
      padding: 0;
      background: transparent;
      font-size: 100%;
      line-height: 1.45;
      border-radius: 0px;
      color: inherit;
      border: none;
    }
  }
`;

const PrevAndNext = styled.div`
  width: 100%;
  ul {
    background: ${secondaryLight};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 2rem 1rem;
    margin: 0 auto;
    max-width: 1000px;
  }
`;

export const ButtonLink = styled(Link)`
  -webkit-appearance: none;
  background-color: ${secondary};
  border-radius: 5px;
  border: none;
  color: #757575;
  border: 1px solid #ddd;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0rem;
  padding: 1rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  & + & {
    margin-left: 1rem;
  }
`;

// eslint-disable-next-line react/display-name
export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { title, source, date, image } = post.frontmatter;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <Head pageTitle={title} />
      <Box centered>
        <div style={{ marginBottom: '1rem' }}>
          <Title as="h3" size="medium">
            {title}
          </Title>
          <Title as="h4" size="small">
            {date}
          </Title>
          <a href={source}>View on GitHub</a>
        </div>
        <div
          style={{ height: '400px', maxHeight: '400px', margin: '1.5rem 0' }}
        >
          <Img
            style={{ maxHeight: '100%' }}
            imgStyle={{ objectFit: 'contain' }}
            fluid={image ? image.childImageSharp.fluid : {}}
            alt={title}
          />
        </div>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>

      {/* <Box fluid> */}
      <PrevAndNext>
        <ul>
          <li>
            {previous && (
              <ButtonLink to={`${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </ButtonLink>
            )}
          </li>
          <li>Browse more projects</li>
          <li>
            {next && (
              <ButtonLink to={`${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </ButtonLink>
            )}
          </li>
        </ul>
      </PrevAndNext>
      {/* </Box> */}
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
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
