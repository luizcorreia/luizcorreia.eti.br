import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/'
import SEO from '../components/Seo'
import RecommendedPosts from '../components/RecommendedPosts'
import Comments from '../components/Comments'

import {
  PostHeader,
  PostTitle,
  PostDescription,
  PostDate,
  MainContent
} from '../styles/base'

export default props => {
  const post = props.data.markdownRemark
  const next = props.pageContext.next
  const previous = props.pageContext.previous

  return (
    <Layout slug={post.fields.slug}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        pathname={post.fields.slug}
        article={post.frontmatter.article}
      />
      <PostHeader>
        <PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
        description
        title
      }
      timeToRead
    }
  }
`
