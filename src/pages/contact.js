import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import "./contact.css"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact the author" />
      <Nav />
      <div className="contact__header"></div>
      <div className="contact__section">
        <div className="contact__form">
          <h1>Contact</h1>
          <div className="inner">
            <form
              medthod="post"
              name="contact"
              className=""
              action="/thanks"
              data-netlify="true"
              netlify-honeypot="bot"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="field__hidden">
                <label htmlFor="bot">Don't fill this out, human</label>
                <input name="bot" />
              </div>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
              </div>
              <div className="field">
                <label htmlFor="name">Message</label>
                <textarea name="message" rows="6"></textarea>
              </div>
              <div className="submit">
                <button type="submit" className="btn__med">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
