import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class News extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
        
        <section className="section has-background-classic-blue">
            <h2 className="title has-text-centered color-white">
                News
            </h2>
            <div className="columns is-mobile overflow-scroll">
                {posts &&
                posts.map(({ node: post }) => (
                    <div className="is-parent column min-width-1" key={post.id}>
                        <Link to={post.fields.slug} className="color-white">

                            <article
                                className={`blog-list-item tile is-child ${
                                post.frontmatter.featuredpost ? 'is-featured' : ''
                                }`}
                            >
                                <header className="blogheader-top">
                                {post.frontmatter.featuredimage ? (
                                    <div className="hovered-color-primary">
                                    <PreviewCompatibleImage
                                        imageInfo={{
                                        image: post.frontmatter.featuredimage,
                                        alt: `featured image thumbnail for post ${post.title}`,
                                        }}
                                    />
                                    
                                        <h3
                                        className="color-white is-size-6 margin-top"
                                        to={post.fields.slug}
                                        >
                                            {post.frontmatter.title}
                                        </h3>
                                        
                                        <p className="is-size-7 color-white is-block">
                                            {post.frontmatter.date}
                                        </p>
                                    
                                    </div>
                                ) : null}

                                </header>
                            </article>
                        </Link>
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
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }, limit: 8
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
