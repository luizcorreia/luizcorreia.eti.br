require('dotenv').config()

const queries = require('./src/utils/algolia_queries')

const pluginConfig = [
  `gatsby-plugin-twitter`,
  `gatsby-plugin-image`,
  {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/static/assets/img`,
      name: 'uploads'
    }
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 960,
            linkImagesToOriginal: false
          }
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
            destinationDir: 'static/assets/img/'
          }
        },
        `gatsby-remark-lazy-load`,
        `gatsby-remark-responsive-iframe`,
        `gatsby-remark-external-links`,
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            icon: false,
            removeAccents: true
          }
        },
        `gatsby-remark-prismjs`
      ]
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Luiz Correia blog`,
      short_name: `Luiz Correia`,
      start_url: `/`,
      background_color: `#1C2938`,
      theme_color: `#1C2938`,
      display: `minimal-ui`,
      icon: `static/assets/img/luizcorreia-icon.png`
    }
  },
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/posts`
    }
  },
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }]
              })
            })
          },
          query: `
            {
              allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
                edges {
                  node {
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      description
                      date
                    }
                    excerpt(truncate: true, pruneLength: 500, format: HTML)
                  }
                }
              }
            }
          `,
          output: '/feed.xml',
          title: 'Luiz Correia Blog - RSS Feed'
        }
      ]
    }
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-sitemap`
]

if (process.env.CONTEXT === 'production') {
  const algolia = {
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries,
      chunkSize: 10000
    }
  }

  pluginConfig.push(algolia)
}

module.exports = {
  siteMetadata: {
    title: `Luiz Correia`,
    titleTemplate: '%s · Luiz Correia',
    defaultTitle: 'Luiz Correia',
    position: 'Arquiteto de Soluções | Segurança e Privacidade',
    description: `Blog sobre tecnologia, segurança e privacidade digital`,
    authorDescription: `Arquiteto de soluções apaixonado por segurança e privacidade. Autor do livro "Introdução à Privacidade Digital".`,
    author: `@luiz__correia`,
    siteUrl: 'https://luizcorreia.eti.br',
    image: '/assets/img/blog-image.png',
    twitterUsername: `@luiz__correia`
  },
  plugins: pluginConfig
}
