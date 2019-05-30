import React from 'react'
import { StyledIcon, Wrapper } from './favModalStyles'

const FavModal = () => {
  return (
    <Wrapper>
      <StyledIcon name='close' />
      <h1>Please Login to Save Favorites</h1>
    </Wrapper>
  )
}
export default FavModal