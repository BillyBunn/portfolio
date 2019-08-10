import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { accent, primary, secondary } from '../constants/theme';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Head from 'components/head';
import { Content } from '../templates/page';

const Contact = ({ data }) => {
  return (
    <Layout>
      <Head pageTitle={data.contactJson.title} />

      <Box centered>
        <Title as="h3" size="medium">
          Get in touch
        </Title>
        <Content
          dangerouslySetInnerHTML={{
            __html: data.contactJson.content.childMarkdownRemark.html,
          }}
        />
      </Box>
    </Layout>
  );
};

Contact.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Contact;

export const query = graphql`
  query ContactQuery {
    contactJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
