import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as S from './styled'

const Avatar = () => (
  <S.AvatarWrapper>
    <StaticImage
      src="../../../static/assets/img/profile-photo.jpg"
      alt="Luiz Correia"
      width={60}
      height={60}
      style={{ borderRadius: '50%' }}
    />
  </S.AvatarWrapper>
)

export default Avatar
