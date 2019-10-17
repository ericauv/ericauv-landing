/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const projects = require('./src/components/web/ProjectList.js');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  // Create pages for each JSON entry.
  Object.values(projects).forEach((project,index)=>{
    createPage({
      path: project.title,
      component: path.resolve('./src/components/web/Project.js'),
        context: {
        project:project
      }
    });
  });
};