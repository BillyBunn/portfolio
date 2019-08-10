import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { accent, primary, secondary } from '../constants/theme';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import { Content } from '../templates/page';

const ImgContainer = styled.div`
  /* background: red; */
  height: 400px;
  max-height: 400px;
  margin: 1.5rem 0;
  filter: contrast(110%);
  picture:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
  }
`;

const About = ({ data }) => {
  const image = data.headshot;
  return (
    <Layout>
      <Head pageTitle={data.aboutJson.title} />
      <ImgContainer>
        <Img
          style={{ maxHeight: '100%' }}
          imgStyle={{ objectFit: 'contain' }}
          fluid={image ? image.childImageSharp.fluid : {}}
          // alt={title}
        />
      </ImgContainer>
      <Box centered>
        <Content
          dangerouslySetInnerHTML={{
            __html: data.aboutJson.content.childMarkdownRemark.html,
          }}
        />
      </Box>
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
    headshot: file(relativePath: { eq: "images/headshot.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 500, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
