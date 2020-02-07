import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/styles/layout/Layout';
import SEO from '../components/seo'
import Web from '../components/web/Web';


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
    <Layout noBackButton={true}>
      <SEO title="Web" description="Eric Auvaart's web skills and web development projects" />
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
