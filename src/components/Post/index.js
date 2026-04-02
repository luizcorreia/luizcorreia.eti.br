import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Post = ({
  slug,
  date,
  timeToRead,
  title,
  description,
  main_class,
  disableCard,
  image
}) => (
  <S.PostLink to={slug}>
    <S.PostWrapper className={disableCard ? 'disableCard' : ''}>
      {main_class && (
        <S.PostTag className={`is-${main_class}`}>
          <S.ImageWrapper src={`${image}`} />
          <S.PostSpam className={`is-${main_class}`}>{main_class}</S.PostSpam>
        </S.PostTag>
      )}
      <S.PostInfo>
        <S.PostDate>
          {date} {timeToRead && ` • ${timeToRead} min de leitura`}
        </S.PostDate>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>
      </S.PostInfo>
    </S.PostWrapper>
  </S.PostLink>
)

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  main_class: PropTypes.string,
  image: PropTypes.string.isRequired,
  disableCard: PropTypes.bool
}

export default Post
