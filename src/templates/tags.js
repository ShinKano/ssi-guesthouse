import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
        <div className="is-parent column is-6" key={post.node.id}>
        <article
          className={`blog-list-item tile is-child box notification ${
            post.node.frontmatter.featuredpost ? 'is-featured' : ''
          }`}
        >
          <header>
            {post.node.frontmatter.featuredimage ? (
              <div className="featured-thumbnail">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.node.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
                  }}
                />
              </div>
            ) : null}
            <p className="post-meta">
              <Link
                className="title has-text-info is-size-4"
                to={post.node.fields.slug}
              >
                {post.node.frontmatter.title}
              </Link>

              <span className="is-size-7 is-block">
                最終更新：{post.node.frontmatter.date}
              </span>
            </p>

          </header>
          <p>
            {post.node.frontmatter.description}
            <br />
            <br />
            <Link className="button has-text-primary" to={post.node.fields.slug}>
              詳細を読む →
            </Link>
          </p>
        </article>
      </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `「 ${tag} 」${totalCount}件`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h1 className="title is-size-3 is-bold-light">{tagHeader}</h1>
                <ul className="taglist is-marginless">{postLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
