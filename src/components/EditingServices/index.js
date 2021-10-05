import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../seo"
import MenuSection from "./menu"
import Customers from "../Customers"
import Contact from "../Contact"
import { FAQPreviewSection } from "../FAQ"

const EditingServices = ({ data }) => {
  return (
    <Fragment>
      {data.markdownRemark.frontmatter.seo && (
        <SEO
          title={data.markdownRemark.frontmatter.seo.title}
          description={data.markdownRemark.frontmatter.seo.description}
          keywords={data.markdownRemark.frontmatter.seo.keywords}
        />
      )}
      <MenuSection
        content={data.markdownRemark.frontmatter}
        description={data.markdownRemark.html}
      />
      <Customers />
      <Contact />
      {data.markdownRemark.frontmatter.faq && (
        <FAQPreviewSection
          title={data.markdownRemark.frontmatter.faq.title}
          questions={data.markdownRemark.frontmatter.faq.questions}
        />
      )}
    </Fragment>
  )
}

export default EditingServices

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        highlight
        description
        message
        priceCard {
          pricing {
            title
            price {
              inr
              usd
            }
          }
          tagContent
          content
        }
        features {
          id
          title
          link
        }
        editingLevels {
          title
          subHeading
          levelTypes {
            title
            themeColor
          }
          priceDescription {
            title
            descriptions {
              description
            }
            lists {
              list
            }
          }
          levels {
            id
            title
            copy
            substantive
            developmental
          }
        }
        editingSample {
          title
          samples {
            id
            title
            description
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
        editingHighlights {
          title
          highlights {
            id
            title
            description
            image {
              publicURL
            }
          }
        }
        serviceProcess {
          title
          steps {
            id
            order
            title
            description
            themeColor
          }
        }
        faq {
          title
          questions {
            id
            question
            answer
          }
        }
        key
        parentType
        seo {
          title
          description
          keywords
        }
      }
    }
  }
`
