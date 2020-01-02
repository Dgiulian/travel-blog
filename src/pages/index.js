import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Nav from "../components/nav"
import Featured from "../components/featured"
import Home from "../components/home"
import "./index.css"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Travel Blog" />
    <Nav />
    <Featured />
    <Home />
    <Link to="/blog" class="viewMore">
      View More
    </Link>
    <Footer />
  </Layout>
)

export default IndexPage
