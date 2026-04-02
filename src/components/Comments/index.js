import React from 'react'
import PropTypes from 'prop-types'
import { DiscussionEmbed } from 'disqus-react'

import * as S from './styled'

const Comments = ({ url, title }) => {
  const completeURL = `https://luizcorreia.eti.br${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <DiscussionEmbed
        shortname="luizcorreia"
        config={{
          url: completeURL,
          identifier: completeURL,
          title
        }}
      />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Comments
