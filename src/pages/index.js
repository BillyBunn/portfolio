import React from 'react';
import PropTypes from 'prop-types';
import { graphql, navigate } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';

import { Button } from '../components/modal/modal.css';

const Index = ({ data }) => {
  const galleryData = data.allMarkdownRemark.edges.reduce((acc, edge) => {
    acc.push({ ...edge.node.frontmatter, path: edge.node.fields.slug });
    return acc;
  }, []);
  return (
    <Layout>
      <Box>
        <Title as="h2" size="xl">
          Hello, <br />
          I’m Billy Bunn.
        </Title>
        <Title as="h2" size="large">
          {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
        </Title>
      </Box>
      <Box fluid>
        <Title as="h3" size="medium">
          Here’s some of my latest work
        </Title>
        <Gallery items={galleryData} clickable />
        <Button onClick={() => navigate('/projects')}>
          See more of my work
        </Button>
      </Box>
      <div style={{ height: '50vh' }} />
      {/* <IOExample /> */}
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    allMarkdownRemark(
      limit: 3
      filter: { frontmatter: { title: { ne: "" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
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
    }
  }
`;
