import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Gallery from 'components/gallery';
import Filter from 'components/filter';
import Title from 'components/title';

const Projects = ({ data }) => {
  const allProjects = data.allMarkdownRemark.edges.reduce((acc, edge) => {
    acc.push(edge.node.frontmatter);
    return acc;
  }, []);

  const tags = data.allMarkdownRemark.edges
    .reduce((acc, edge) => {
      let projectTags = edge.node.frontmatter.tags.split(', ');
      return acc.concat(projectTags);
    }, [])
    .filter((val, idx, arr) => arr.indexOf(val) === idx);

  const defaultTag = 'All';
  const [currentTag, setCurrentTag] = React.useState(defaultTag);

  const [selectedProjects, setSelectedProjects] = React.useState(allProjects);
  const filterGallery = () => {
    if (currentTag === defaultTag) return setSelectedProjects(allProjects);

    const filteredData = allProjects.filter(item =>
      item.tags.includes(currentTag)
    );
    setSelectedProjects(filteredData);
  };

  React.useEffect(() => {
    filterGallery();
  }, [currentTag]);

  return (
    <Layout>
      <Head pageTitle="Projects" />
      <Box>
        <Title as="h3" size="medium">
          A handful of my projects. Filter by technologies used.
        </Title>
      </Box>

      <Box fluid>
        <Filter
          tags={tags}
          defaultTag={defaultTag}
          currentTag={currentTag}
          setCurrentTag={tag => setCurrentTag(tag)}
        />
        {/* <div
          dangerouslySetInnerHTML={{
            __html: data.projectsJson.content.childMarkdownRemark.html,
          }}
        /> */}
        <Gallery items={selectedProjects} clickable />
      </Box>
    </Layout>
  );
};

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { title: { ne: "" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            path
            collection
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            source
            tags
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

// export const query = graphql`
//   query ProjectsQuery {
//     projectsJson {
//       title
//       content {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `;
