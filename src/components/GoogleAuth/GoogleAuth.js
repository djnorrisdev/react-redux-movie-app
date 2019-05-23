import React from 'react'
import { withRouter } from 'react-router'
import { AuthBtn, UserBtn, Wrapper } from './googleAuthStyles';
import { connect } from 'react-redux';
import { userLogin, userLogout } from '../../redux/auth'

const GoogleAuth = (props) => {
 const handleLogin = () => {
    props.isAuthenticated ? props.userLogout() : props.userLogin()
  }

  const handleOpenDash = () => {
    props.history.push('/user-dash')
  }

  const renderButtons = () => {
    return (
      <div>
        {props.isAuthenticated ? <UserBtn onClick={handleOpenDash}>Favorites</UserBtn> : null}
        <AuthBtn onClick={handleLogin}>{props.isAuthenticated ? 'Logout' : 'Login'}</AuthBtn>
      </div>
    )
  }

    return (
      <Wrapper>
        {renderButtons()}
      </Wrapper>
    )
}
const mapStateToProps = ({auth: {isAuthenticated}}) => {
  console.log(isAuthenticated);
  return {
    isAuthenticated
  }
}

export default withRouter(connect(mapStateToProps, {userLogin, userLogout})(GoogleAuth));