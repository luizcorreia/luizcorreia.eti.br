import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from '../../styles/transitions'

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan('large')`

  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  ${media.lessThan('large')`
    padding-top: 0.1rem;
    font-size: 0.8rem;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    margin-left: 1.8rem;
  `}
`

export const MenuLinksItem = styled.li`
  ${media.lessThan('large')`
  margin-left: 0.8rem;
`}
  padding: 0.5rem 0;

  .active {
    color: var(--highlight);
  }

  a {
    color: var(--texts);
    text-decoration: none;
    transition: ${transitions.COLOR};

    &:hover {
      color: var(--highlight);
    }
  }
`
