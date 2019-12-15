import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section 
            className="main background-color-main content"
            style={{
                height: '40vh',
            }}
        >
            <div className="full-height align-items-center">
                    <h1 className="has-text-primary">
                        すべての記事
                    </h1>
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
