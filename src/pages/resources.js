import React, { Fragment, useState  } from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import FAQ from "../components/FAQ"


const BlogPage = ({ data }) => {
  const blogList = data.blogData.edges

  const seoData = data.seoData.childMarkdownRemark.frontmatter



  const [toggleState, setToggleState] = useState("Academic Editing");
 
  console.log(toggleState)

  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <Fragment id="blogs_container_main">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />
            <div id="blogListContainer_menu">
        <p onClick={() => toggleTab("Academic Editing")} role="presentation" id= {toggleState === "Academic Editing" ? "menu1" : "menu2"}>Academic Editing</p>
        <p onClick={() => toggleTab("Publication Support")} role="presentation" id= {toggleState === "Publication Support" ? "menu1" : "menu2"}>Publication Support</p>
        <p onClick={() => toggleTab("Plagiarism Check")} role="presentation" id= {toggleState === "Plagiarism Check" ? "menu1" : "menu2"}>Plagiarism Check</p>
        <p onClick={() => toggleTab("Business Editing")} role="presentation" id= {toggleState === "Business Editing" ? "menu1" : "menu2"}>Business Editing</p>
      </div>
      <div className="blogListContainer">
        <h2>Effective Writing: Tips & Techniques</h2>
        {blogList &&
          blogList.map(blogItem => {
            return (
              <>
              {
                blogItem.node.frontmatter.category === toggleState
                ?
                <div key={blogItem.node.id} className="blogListItem">
                <Link to={blogItem.node.fields.slug}>
                  <h3 className="blogHeading">
                    {blogItem.node.frontmatter.title}
                  </h3>
                  <p className="blogExcerpt">
                    {blogItem.node.frontmatter.excerpt}
                  </p>
                  <div className="blogInfo">
                    <span className="authorImage">
                      {blogItem.node.frontmatter.author_image.extension ===
                        "svg" &&
                      blogItem.node.frontmatter.author_image.childImageSharp ===
                        null ? (
                        <img
                          src={blogItem.node.frontmatter.author_image.publicURL}
                          alt={blogItem.node.frontmatter.author}
                        />
                      ) : (
                        <img
                          src={
                            blogItem.node.frontmatter.author_image
                              .childImageSharp.fluid.src
                          }
                          alt={blogItem.node.frontmatter.author}
                        />
                      )}
                    </span>
                    <span className="blogAuthor">
                      {blogItem.node.frontmatter.author}
                    </span>
                    <span>on {blogItem.node.frontmatter.date}</span>
                  </div>
                </Link>
              </div>
              :
              ("")
              }
              </>
            )
          })}
      </div>
      <FAQ />
    </Fragment>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    blogData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(resources)/.*\\\\.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
            category
          }
        }
      }
    }
    seoData: file(relativePath: { eq: "seoBlog.md" }) {
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
