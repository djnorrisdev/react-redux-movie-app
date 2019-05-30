import React from 'react'
import { connect } from 'react-redux';
import { addedFav } from '../../redux/favoritesList'
import { StyledIcon, Wrapper } from './favModalStyles'

const FavModal = props => {
  const handleClose = () => {
    const isOpen = false;
    props.addedFav(isOpen)
  }

  return (
    <Wrapper>
      
      <div>
      <StyledIcon name='close' onClick={handleClose} />
      <h1>Successfully Added To Favorites</h1>
      </div>
    </Wrapper>
  )
}
const mapStateToProps = ({ favoritesList: { added } }) => {
  return {added}
}
export default connect(mapStateToProps, { addedFav })(FavModal)