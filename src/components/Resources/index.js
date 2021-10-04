import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../seo"
import {
  BlogContainer,
  AuthorInfo,
  BlogContent,
  TagsList
} from './styles';

export const BlogPost = ({
  fields,
  author_image,
  author,
  bio,
  date,
  title,
  html,
  tags,
  preview
}) => {

  // const content = data.markdownRemark;

  return (
    <Fragment>
      <BlogContainer>
        <AuthorInfo>
          <div className="author_image">
            <img src={author_image} alt={author} />
          </div>
          <div className="author_info">
            <h4>{author}</h4>
            <span>{bio}</span>
            <div>
              {
                fields && <span>{fields.readingTime.text} &middot; </span>
              }
              <span>{date}</span>
            </div>
          </div>
        </AuthorInfo>
        <BlogContent>
          <h2 className="blogTitle">{title}</h2>
          {
            preview ? <div>{html}</div> : <div dangerouslySetInnerHTML={{ __html: html }} />
          }
        </BlogContent>
        {
          tags &&
          <TagsList>
            Tagged with
            {
              tags.map((type, i, arr) => {
                let divider = i<arr.length-1 && <>, </>;
                return (
                  <span key={type}>{type}{divider}</span>
                )
              })
            }
            {/* {
              content.frontmatter.tags.map(tag => <span>{tag}</span>)
            } */}
          </TagsList>
        }
      </BlogContainer>
    </Fragment>
  )
}

const Blog = ({ data }) => {

  const { blogpost: post } = data;

  const seoData = post.frontmatter.seo;

  let authorImage;
  if(post.frontmatter.author_image.extension === 'svg' && post.frontmatter.author_image.childImageSharp === null) {
    authorImage = post.frontmatter.author_image.publicURL;
  } else {
    authorImage = post.frontmatter.author_image.childImageSharp.fluid.src;
  }

  return (
    <Fragment>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <BlogPost
        fields={post.fields}
        author_image={authorImage}
        author={post.frontmatter.author}
        bio={post.frontmatter.bio}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        html={post.html}
        tags={post.frontmatter.tags}
        preview={false}
      />
    </Fragment>
    )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    blogpost: markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        readingTime {
          text
        }
      }
      frontmatter {
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
        bio
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        seo {
          title
          description
          keywords
        }
      }
      html
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
