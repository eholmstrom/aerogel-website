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

class App extends Component {
  componentWillMount () {
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
