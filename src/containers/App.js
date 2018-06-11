import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from '../components/Header'
import Welcome from '../components/Welcome'
import WorkProcess from './WorkProcess'
import ContactUs from './ContactUs'
import AboutUsContainer from './AboutUsContainer'

import '../styles/App.css'

export const paths = {
  home: '/',
  login: '/login',
  workProcess: '/workprocess',
  aboutUs: '/aboutus',
}

class App extends Component {
  componentWillMount () {
    // TODO FIX
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div style={{ height: '100%' }}>
            <Header
              loggedIn={!!this.props.accessToken}
              admin={this.props.user}
              logout={this.props.logout}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Welcome
                    user={this.props.user}
                    accessToken={this.props.accessToken}
                    getUser={this.props.getUser}
                  />
                )}
              />
              <Route exact path="/workprocess" component={WorkProcess} />
              <Route exact path="/contactus" component={ContactUs} />
              <Route exact path="/aboutus" component={AboutUsContainer} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
/*
App.propTypes = {
  accessToken: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  user: PropTypes.object,
  getUser: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  rehydrateToken: PropTypes.func.isRequired,
}

App.defaultProps = {
  accessToken: false,
  user: null,
}

function mapStateToProps (state) {
  return {
    accessToken: state.user.accessToken,
    user: state.user.user,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(dispatch)
}
*/
export default App // connect(mapStateToProps, mapDispatchToProps)(App)
