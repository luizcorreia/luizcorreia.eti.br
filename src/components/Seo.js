import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ title, description, image, pathname, article, lang }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
          }
        }
      }
    `
  )

  const seo = {
    title: title
      ? `${title} · ${site.siteMetadata.author}`
      : site.siteMetadata.defaultTitle,
    description: description || site.siteMetadata.defaultDescription,
    image: `${site.siteMetadata.siteUrl}${image || site.siteMetadata.defaultImage}`,
    url: `${site.siteMetadata.siteUrl}${pathname || '/'}`
  }

  return (
    <>
      <html lang={lang} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      {article && <meta property="og:type" content="article" />}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </>
  )
}

SEO.defaultProps = {
  lang: `pt-br`,
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool
}

export default SEO
