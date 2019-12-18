import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section has-background-classic-blue">
            <div className="container">
                <div className="full-height align-items-center">
                    <h1 className="title color-white has-text-centered">
                        すべての記事
                    </h1>
                </div>
            </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
