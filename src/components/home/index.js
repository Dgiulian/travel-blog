import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"
import "./home.css"

const HOME_QUERY = graphql`
  query HomeQuery {
    allContentfulBlog(
      limit: 9
      sort: { fields: createdAt, order: DESC }
      filter: { home: { eq: true } }
    ) {
      edges {
        node {
          id
          slug
          title
          featuredImage {
            fluid(maxWidth: 1200, quality: 85) {
              src
              ...GatsbyContentfulFluid
            }
          }
          category {
            title
            id
          }
        }
      }
    }
  }
`

const Home = () => (
  <StaticQuery
    query={HOME_QUERY}
    render={data => (
      <div className="feed">
        {data.allContentfulBlog.edges.map(edge => (
          <div
            key={edge.node.id}
            className="card"
            style={{
              backgroundImage: `linear-gradient(180deg,rgba(10,10,10,.6) 0,rgba(10,10,10,.6) 60%,#0a0a0a),
          url(${edge.node.featuredImage.fluid.src})`,
            }}
            onClick={() => navigate(`/blog/${edge.node.slug}`)}
          >
            {edge.node.category.map(category => (
              <p className="card__category">{category.title}</p>
            ))}
            <p className="card__title">{edge.node.title}</p>
          </div>
        ))}
      </div>
    )}
  ></StaticQuery>
)

export default Home
