import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

import Header from '../components/Header'
import Welcome from '../components/Welcome'
import WorkProcess from './WorkProcess'
import ContactUs from './ContactUs'
import AboutUsContainer from './AboutUsContainer'
import BlogContainer from './BlogContainer'
import InstructionContainer from './InstructionContainer'
import VikfixContainer from './VikfixContainer'
import FAQContainer from './FAQContainer'

import '../styles/App.css'

export const paths = {
  home: '/',
  login: '/login',
  workProcess: '/workprocess',
  aboutUs: '/aboutus',
  blog: '/blog',
  contactUs: '/contactus',
  instructions: '/instructions',
  vikfix: '/vikfix',
  buy_vikfix: '/buy_vikfix',
  faq: '/vikfix/FAQ',
}

function initializeReactGA () {
  ReactGA.initialize('UA-131151176-1')
}

class App extends Component {
  componentWillMount () {
    initializeReactGA()
  }

  render () {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Vik Sports - Sustainable wetsuits with enhanced performance</title>
          <meta
            name="description"
            content="Vik Sports offer sustainable wetsuits with enhanced performance. By reinventing the wetsuit we can offer a seamless wetsuit with higher flexibility, insulation performance but also durability compared to conventional wetsuits. All this with reduced environmental impact."
          />
          <meta
            name="keywords"
            content="sustainable, sustainability, wetsuit, wetsuits, wet suit, wet-suit, wet-suits, sustainable wetsuit, sustainable wetsuits, flexible, flexibility, flexible wetsuit, flexible wetsuits, natural, natural rubber, natural latex, natural rubber latex, natural wetsuit, natural wetsuits"
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
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
              <Route
                exact
                path="/instructions"
                render={() => (
                  <div className="instructions">
                    <Header
                      loggedIn={!!this.props.accessToken}
                      admin={this.props.user}
                      logout={this.props.logout}
                    />
                    <InstructionContainer />
                    {ReactGA.pageview('/instructions')}
                  </div>
                )}
              />
              <Route
                exact
                path="/vikfix"
                render={() => (
                  <div className="vikfix">
                    <Header
                      loggedIn={!!this.props.accessToken}
                      admin={this.props.user}
                      logout={this.props.logout}
                    />
                    <VikfixContainer />
                    {ReactGA.pageview('/vikfix')}
                  </div>
                )}
              />
              <Route
                exact
                path="/buy_vikfix"
                render={() => (
                  <div className="buy_vikfix">
                    <Header
                      loggedIn={!!this.props.accessToken}
                      admin={this.props.user}
                      logout={this.props.logout}
                    />
                    <VikfixContainer />
                    {ReactGA.pageview('/buy_vikfix')}
                  </div>
                )}
              />
              <Route
                exact
                path="/vikfix/FAQ"
                render={() => (
                  <div className="FAQ">
                    <Header
                      loggedIn={!!this.props.accessToken}
                      admin={this.props.user}
                      logout={this.props.logout}
                    />
                    <FAQContainer />
                    {ReactGA.pageview('/vikfix/FAQ')}
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
