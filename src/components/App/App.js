import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from "react-redux";
import Header from '../../shared/layout/Header/Header';
import MovieResults from '../MovieResults/MovieResults';
import { Wrapper } from './appStyles'
import UserDash from '../UserDash/UserDash';
import {fetchUser} from '../../redux/auth'

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render = { props => (
//     props.isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
//   )} />
// )
const loggedInView = () => (<UserDash />)
const loggedOutView = () => (<MovieResults />)

const App = props => {
  const isloggedIn = props.isAuthenticated
  useEffect(()=>{
    props.fetchUser()
  },[])
  return (
    <Router>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/" component={MovieResults} />
          <Route path='/user-dash' component={props.isAuthenticated ? loggedInView : loggedOutView} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

const mapStateToProps = ({auth: {isAuthenticated}}) => {
  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps, { fetchUser })(App);
