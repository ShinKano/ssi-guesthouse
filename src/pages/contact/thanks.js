import React from 'react'
import Layout from '../../components/Layout'
import { FormattedMessage } from "gatsby-plugin-intl"

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1><FormattedMessage id="contact-thanks" /></h1>
          <p>
              <FormattedMessage id="contact-thanks-message01" />
          </p>
          <p>
              <FormattedMessage id="contact-thanks-message02" />
          </p>
        </div>
      </div>
    </section>
  </Layout>
)
