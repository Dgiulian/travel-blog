const path = require("path")
const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.error)
        }
        return result
      })
    )
  })

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const getBlog = makeRequest(
    graphql,
    `
    query BlogQuery {
      allContentfulBlog(
        limit: 1
        sort: { fields: createdAt, order: DESC }
        filter: { featured: { eq: true } }
      ) {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }`
  ).then(result =>
    result.data.allContentfulBlog.edges.forEach(({ node }) => {
      console.log(node);
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve(`src/templates/blog.js`),
        context: {
          id: node.id,
        },
      })
    })
  )
  return Promise.all([getBlog])
}
