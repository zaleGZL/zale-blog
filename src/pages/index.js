import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import './index.scss'

class BlogIndex extends React.Component {
  render() {
    const { data, location } = this.props
    const siteTitle = get(data, 'site.siteMetadata.title')
    const siteDescription = get(data, 'site.siteMetadata.description')
    const posts = get(data, 'allMarkdownRemark.edges')

    return (
      <Layout
        location={location}
        siteTitle={siteTitle}
        siteDescription={siteDescription}
      >
        <Helmet
          htmlAttributes={{ lang: 'cmn' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteDescription}
        />
        <div className="my-home-content-container">
          {posts.map(({ node }, index) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div className="my-blog-list-item" key={index}>
                <h4 className="subtitle is-4 has-text-link my-blog-list-title">
                  <Link className="my-blog-list-link" to={node.fields.slug}>
                    {title}
                  </Link>
                </h4>
                <div className="is-clearfix">
                  <div className="has-text-grey-light is-pulled-left my-post-time">
                    {node.frontmatter.date}
                  </div>
                  <div className="tags is-pulled-left my-post-tags">
                    <span className="tag">{node.frontmatter.category}</span>
                  </div>
                </div>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                <hr />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 120)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            category
          }
        }
      }
    }
  }
`
