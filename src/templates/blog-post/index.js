import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Layout from '../../components/layout'

import './style.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const { data, pageContext, location } = this.props
    const siteTitle = get(data, 'site.siteMetadata.title')
    const siteDescription = get(data, 'site.siteMetadata.description')
    const post = data.markdownRemark
    const postDescription = post.excerpt
    const { previous, next } = pageContext

    return (
      <Layout location={location} siteTitle={siteTitle} siteDescription={siteDescription}>
        <Helmet
          htmlAttributes={{ lang: 'cmn' }}
          meta={[{ name: 'description', content: postDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <div className="my-post-container">
          <div>
            <h3 className="title is-3 has-text-link my-post-title">
              {post.frontmatter.title}
            </h3>
            <div className="is-clearfix">
              <div className="has-text-grey-light is-pulled-left my-post-time">
                {post.frontmatter.date}
              </div>
              <div className="tags is-pulled-left my-post-tags">
                <span className="tag is-link">{post.frontmatter.category}</span>
                {(post.frontmatter.tags || []).map((tag, index) => {
                  return (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  )
                })}
              </div>
            </div>
            <hr />
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <hr />
            <div className="my-pagination">
              <div className="my-pagination-left">
                {previous && (
                  <Link to={previous.fields.slug}>
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </div>
              <div className="my-pagination-right">
                {next && (
                  <Link to={next.fields.slug}>{next.frontmatter.title} →</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 120)
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        category
        tags
      }
    }
  }
`
