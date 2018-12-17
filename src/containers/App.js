import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ReactGA from 'react-ga'

import Header from '../components/Header'
import Welcome from '../components/Welcome'
import WorkProcess from './WorkProcess'
import ContactUs from './ContactUs'
import AboutUsContainer from './AboutUsContainer'
import BlogContainer from './BlogContainer'

import '../styles/App.css'

export const paths = {
  home: '/',
  login: '/login',
  workProcess: '/workprocess',
  aboutUs: '/aboutus',
  blog: '/blog',
  contactUs: '/contactus',
}

function initializeReactGA () {
  ReactGA.initialize('UA-131151176-1')
}

class App extends Component {
  componentWillMount () {
    initializeReactGA()
    // TODO FIX
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div style={{ height: '100%' }}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <div className="welcome">
                    <Header
                      loggedIn={!!this.props.accessToken}
                      admin={this.props.user}
                      logout={this.props.logout}
                    />
                    <Welcome
                      user={this.props.user}
                      accessToken={this.props.accessToken}
                      getUser={this.props.getUser}
                    />
                    {ReactGA.pageview('/')}
                  </div>
                )}
              />
              <Route
                exact
                path="/workprocess"
                render={() => (
                  <div>
                    <Header
                      loggedIn={!!this.props.accessToken}
                      admin={this.props.user}
                      logout={this.props.logout}
                    />
                    <WorkProcess />
                    {ReactGA.pageview('/workprocess')}
                  </div>
                )}
              />
              <Route
                exact
                path="/contactus"
                render={() => (
                  <div>
                    <Header
                      loggedIn={!!this.props.accessToken}
                      admin={this.props.user}
                      logout={this.props.logout}
                    />
                    <ContactUs />
                    {ReactGA.pageview('/contactus')}
                  </div>
                )}
              />
              <Route
                exact
                path="/aboutus"
                render={() => (
                  <div className="aboutUs">
                    <Header
                      loggedIn={!!this.props.accessToken}
                      admin={this.props.user}
                      logout={this.props.logout}
                    />
                    <AboutUsContainer />
                    {ReactGA.pageview('/aboutus')}
                  </div>
                )}
              />
              <Route
                exact
                path="/blog"
                render={() => (
                  <div>
                    <Header
                      loggedIn={!!this.props.accessToken}
                      admin={this.props.user}
                      logout={this.props.logout}
                    />
                    <BlogContainer />
                    {ReactGA.pageview('/blog')}
                  </div>
                )}
              />
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
  changeLogo: PropTypes.func.isRequired,
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
