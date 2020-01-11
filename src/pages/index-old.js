import React from 'react';
import PropTypes from 'prop-types';
import { graphql, navigate } from 'gatsby';
import Layout from '../components/Layout';
import { Box, Heading, Button } from '@theme-ui/components';
import Boxes from '../components/Boxes';

const Index = ({ data }) => {
  // const galleryData = data.allMarkdownRemark.edges.reduce((acc, edge) => {
  //   acc.push({ ...edge.node.frontmatter, path: edge.node.fields.slug });
  //   return acc;
  // }, []);
  return (
    <Layout>
      <Box 
      
      // minHeight="95vh"
      >
        {/* <Boxes data={galleryData} /> */}

        {/* <Heading as="h2" size="xl">
          Hello, <br />
          I’m Billy Bunn.
        </Heading>
        <Heading as="h2" size="large">
          {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
        </Heading> */}



        {/* <Heading>Here’s some of my latest work</Heading> */}
        {/* <Gallery items={galleryData} clickable /> */}
        {/* <Button onClick={() => navigate('/projects')}>
          See more of my work
        </Button> */}
        {/* <Boxes /> */}
      </Box>

      {/* <IOExample /> */}
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

// export const query = graphql`
//   query HomepageQuery {
//     homeJson {
//       title
//       content {
//         childMarkdownRemark {
//           html
//           rawMarkdownBody
//         }
//       }
//       gallery {
//         title
//         copy
//         image {
//           childImageSharp {
//             fluid(maxHeight: 500, quality: 90) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     }

  //   allMarkdownRemark(
  //     # limit: 3
  //     filter: { frontmatter: { title: { ne: "" } } }
  //     sort: { fields: frontmatter___date, order: DESC }
  //   ) {
  //     edges {
  //       node {
  //         fields {
  //           slug
  //         }
  //         frontmatter {
  //           title
  //           date
  //           description
  //           image {
  //             childImageSharp {
  //               fluid(maxHeight: 500, quality: 90) {
  //                 ...GatsbyImageSharpFluid_withWebp
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
// `;
