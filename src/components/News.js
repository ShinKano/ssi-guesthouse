import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class News extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <section className="section has-background-dark">

            <div className="columns">
                {posts &&
                posts.map(({ node: post }) => (
                    <div className="is-parent column is-3" key={post.id}>
                    <article
                        className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                        }`}
                    >
                        <header>
                        {post.frontmatter.featuredimage ? (
                            <div className="">
                            <PreviewCompatibleImage
                                imageInfo={{
                                image: post.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${post.title}`,
                                }}
                            />
                            <p className="post-meta">
                                <Link
                                className="title has-text-info is-size-4"
                                to={post.fields.slug}
                                >
                                {post.frontmatter.title}
                                </Link>
                                
                                <span className="is-size-7 is-block">
                                最終更新：{post.frontmatter.date}
                                </span>
                            </p>
                            </div>
                        ) : null}

                        </header>
                        <p>
                        {post.frontmatter.description}
                        <br />
                        <br />
                        <Link className="button has-text-primary" to={post.fields.slug}>
                            詳細を読む →
                        </Link>
                        </p>
                    </article>
                    </div>
                ))}
            </div>
        </section>
    )
  }
}

News.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }, limit: 4
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
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
    `}
    render={(data, count) => <News data={data} count={count} />}
  />
)
