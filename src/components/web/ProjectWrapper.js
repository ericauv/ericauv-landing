import React from 'react';
import Layout from '../styles/layout/Layout';
import Project from './Project';
import { graphql } from 'gatsby';
import SEO from '../seo'

const ProjectWrapper = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title}/>
      <Project data={markdownRemark}></Project>
    </Layout>
  );
};

export default ProjectWrapper;
// slug comes from pageContext provided by createPages API in gatsby-node.js
export const projectQuery = graphql`
  query projectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        githubLink
        projectLink
        tags
        titleMediaType
        titleMedia {
          publicURL
        }
      }
    }
  }
`;
