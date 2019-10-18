import Web from '../components/web/Web';
import React from 'react';
import Layout from '../components/styles/layout/Layout';
import { graphql } from 'gatsby';

const nodesReducer = nodes => {
  return nodes.map(node => {
    const { title, tags } = node.frontmatter;
    const { slug } = node.fields;
    return { title, tags, slug };
  });
  // [{title:'ericauv-store', slug:'web/project/ericauv-store', tags:["node.js", "react.js"]}, {...}, {...}]
};

const WebPage = ({
  data: {
    allMarkdownRemark: { nodes }
  }
}) => {
  return (
    <Layout>
      <Web projects={nodesReducer(nodes)} />
    </Layout>
  );
};
export default WebPage;
export const projectsQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          tags
        }
      }
    }
  }
`;
