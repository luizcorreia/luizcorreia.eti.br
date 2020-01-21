import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import transitions from '../../styles/transitions';

export const PostWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  transition: ${transitions.ALL};

  &:not(.disableCard) {
    body#card & {
      border: none;
      padding: 2rem 1rem;
      flex-direction: column;
      justify-content: center;
    }
  }

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const PostLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: ${transitions.COLOR};

  body#card & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`

export const ImageWrapper = styled.img`
  background: var(--highlight);
  min-height: 90px;
  min-width: 90px;
  max-height: 90px;
  max-width: 90px;
  flex: 2;
  object-fit: cover;

  ${media.lessThan('large')`
    display: none;
  `}

  body#card & {
    margin-bottom: 1.5rem;
  }

`

export const PostSpam = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  text-transform: uppercase;
  position:absolute;
  background: var(--highlight);
  width: inherit;
  min-width: 90px;

  ${media.lessThan('large')`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    position: relative;
  `}

  &.is-js {
    background: #d6ba32;
    color: #000;
  }

  &.is-misc {
    background: #47650b;
  }

  &.is-dev {
    background: #61728f;
  }

  &.is-svg {
    background: #7d669e;
  }

  &.is-css {
    background: #24809e;
  }

  &.is-jekyll {
    background: #b31917;
  }

`

export const PostTag = styled.div`
  background: var(--highlight);
  color: var(--white);
  display: flex;
  min-height: 90px;
  min-width: 90px;
  justify-content: center;
  text-align: center;

  body#card & {
    margin-bottom: 1.5rem;
  }

  ${media.lessThan('large')`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}

  &.is-js {
    background: #d6ba32;
    color: #000;
  }

  &.is-misc {
    background: #47650b;
  }

  &.is-dev {
    background: #61728f;
  }

  &.is-svg {
    background: #7d669e;
  }

  &.is-css {
    background: #24809e;
  }

  &.is-jekyll {
    background: #b31917;
  }
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
    margin: 0;
  `}
`

export const PostDate = styled.time`
  font-size: 0.9rem;
`

export const PostTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#card & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostDescription = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
