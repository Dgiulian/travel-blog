import React from "react"
import Layout from "../components/layout"
import "./contact.css"
import Nav from '../components/nav'

const Thanks = () => {
  return (
    <Layout>
      <Nav />
      <div className="contact__header">
        <h1>Thank you! I'll be in contact soon.</h1>
      </div>
    </Layout>
  )
}

export default Thanks
