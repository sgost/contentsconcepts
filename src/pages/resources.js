import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import FAQ from "../components/FAQ"

const BlogPage = ({ data }) => {

  const blogList = data.blogData.edges;

  const seoData = data.seoData.childMarkdownRemark.frontmatter;

  return (
    <Fragment>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <div className="blogListContainer">
        <h2>Effective Writing: Tips & Techniques</h2>
        {
          blogList && blogList.map(blogItem => {
            return (
              <div key={blogItem.node.id} className="blogListItem">
                <Link to={blogItem.node.fields.slug}>
                  <h3 className="blogHeading">{blogItem.node.frontmatter.title}</h3>
                  <p className="blogExcerpt">
                    {blogItem.node.frontmatter.excerpt}
                  </p>
                  <div className="blogInfo">
                    <span className="authorImage">
                      {
                        blogItem.node.frontmatter.author_image.extension === 'svg' && blogItem.node.frontmatter.author_image.childImageSharp === null ?
                          <img src={blogItem.node.frontmatter.author_image.publicURL} alt={blogItem.node.frontmatter.author} /> :
                          <img src={blogItem.node.frontmatter.author_image.childImageSharp.fluid.src} alt={blogItem.node.frontmatter.author} />
                      }
                    </span>
                    <span className="blogAuthor">{blogItem.node.frontmatter.author}</span>
                    <span>on {blogItem.node.frontmatter.date}</span>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
      <FAQ />
    </Fragment>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    blogData: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(resources)\\/.*\\\\.md$/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
            author
            author_image {
              childImageSharp {
                fluid {
                  src
                }
              }
              extension
              publicURL
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    seoData: file(relativePath: {eq: "seoBlog.md"}) {
      childMarkdownRemark {
        frontmatter {
          title
          description
          keywords
        }
      }
    }
  }
`
