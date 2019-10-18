const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      /* createFilePath above returns /value */
      value: `/web/project${value}`
    });
  }
};
const path = require('path');
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              title
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create project pages.
  const projects = result.data.allMarkdownRemark.edges;

  projects.forEach(({ node }, index) => {
    createPage({
      // This is the slug created earlier
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/web/ProjectWrapper.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id }
    });
  });
};
