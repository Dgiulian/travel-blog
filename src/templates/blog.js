import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"
import "./blog.css"
const BlogTemplate = (props) => {
  return (
    <Layout>
      <SEO
        title={props.data.contentfulBlog.seoTitle}
        description={props.data.contentfulBlog.seoDescription}
        keywords={props.data.contentfulBlog.seoKeywords}
      />
      <Nav />
      <div className="blog__header">
        <div
          className="blog__hero"
          style={{
            backgroundImage: `url(${props.data.contentfulBlog.featuredImage.fluid.src})`,
          }}
        >
          <div className="blog__info">
            <h1 className="blog__title">{props.data.contentfulBlog.title}</h1>
          </div>
        </div>
      </div>
      <div className="blog__wrapper">
        <div className="blog__content" dangerouslySetInnerHTML={{__html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`}}>

        </div>
      </div>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
 query BlogQuery($id: String) {
  contentfulBlog(id: {eq: $id}) {
    id
    slug
    content {
      childMarkdownRemark {
        html
      }
    }
    seoTitle
    seoKeywords
    seoAuthor
    seoImage {
      fluid {
        src
      }
    }
    featuredImage {
      fluid {
        src
      }
    }
    seoDescription
    title
  }
}
`
