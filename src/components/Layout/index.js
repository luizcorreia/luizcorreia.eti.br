import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { TransitionPortal } from 'gatsby-plugin-transition-link'

import GlobalStyles from '../../styles/global'
import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'

import * as S from './styled'

const Layout = ({ slug, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            position
            description
            authorDescription
            siteUrl
          }
        }
      }
    `
  )

  return (
    <>
    <Helmet title={site.siteMetadata.title}>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${site.siteMetadata.siteUrl}${slug}twitter-card.jpg`}
        />
      </Helmet>
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar site={site.siteMetadata} />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
