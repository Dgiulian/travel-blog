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
    query BlogArchiveQuery {
      allContentfulBlog(
        sort: { fields: createdAt, order: DESC }
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
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve(`src/templates/blog.js`),
        context: {
          id: node.id,
        },
      })
    })
  )
  // Create Archive for all blogs
  const getArchive = makeRequest(
    graphql,
    `
    query BlogQuery {
      allContentfulBlog(
        sort: { fields: createdAt, order: DESC }
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
  ).then(result => {
    const blogs = result.data.allContentfulBlog.edges
    const blogsPerPage = 3
    const numPages = Math.ceil(blogs.length / blogsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve(`src/templates/archive.js`),
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          currentPage: i + 1,
        }
      })
    })
  })
  return Promise.all([getBlog, getArchive])
}
