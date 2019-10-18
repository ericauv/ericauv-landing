// from gatsby docs
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/web/project${value}`,
    })
  }
}
const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create project pages.
  const projects = result.data.allMarkdownRemark.edges

  projects.forEach(({ node }, index) => {
    createPage({
      // This is the slug created earlier
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/web/Project.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id, html:node.html },
    })
  })
}
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   // you only want to operate on `Mdx` nodes. If you had content from a
//   // remote CMS you could also check to see if the parent node was a
//   // `File` node here
//   if (node.internal.type === "Mdx") {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       // Name of the field you are adding
//       name: "slug",
//       // Individual MDX node
//       node,
//       // Generated value based on filepath with "blog" prefix. you
//       // don't need a separating "/" before the value because
//       // createFilePath returns a path with the leading "/".
//       value: `/web/project${value}`,
//     })
//   }
// }
// const path = require("path")
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   // Destructure the createPage function from the actions object
//   const { createPage } = actions

//   const result = await graphql(`
//     query {
//       allMdx {
//         edges {
//           node {
//             id
//             body
//             frontmatter {
//               title
//               tags
//               titleMediaType
//               titleMedia {
//                 publicURL
//               }
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
//   }
//   // Create project pages.
//   const projects = result.data.allMdx.edges

//   projects.forEach(({ node }, index) => {
//     createPage({
//       // This is the slug created earlier
//       path: node.fields.slug,
//       // This component will wrap our MDX content
//       component: path.resolve(`./src/components/web/Project.js`),
//       // You can use the values in this context in
//       // our page layout component
//       context: { id: node.id, frontmatter:node.frontmatter, body:node.body },
//     })
//   })
// }