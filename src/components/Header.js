import React, { Component } from 'react'
import Responsive from 'react-responsive-decorator'
import MediaQuery from 'react-responsive'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import Face from 'material-ui/svg-icons/action/face'
import Menu from 'material-ui/svg-icons/navigation/menu'
import Exit from 'material-ui/svg-icons/action/exit-to-app'
import { paths } from '../containers/App'
import MobileDrawer from './header/MobileDrawer'
import MenuLinkItem from './header/MenuLinkItem'

import '../styles/Header.css'

class Header extends Component {
  state = {
    drawerOpen: false,
  }

  handleDrawerToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen })

  renderMobileMenu = () => (
    <div>
      {this.props.location.pathname === '/workprocess' ||
      this.props.location.pathname === '/contactus' ||
      this.props.location.pathname === '/blog' ? (
        <FlatButton
          style={{ marginTop: 20, color: 'black' }}
          icon={<Menu />}
          onClick={this.handleDrawerToggle}
        />
      ) : (
        <FlatButton
          style={{ marginTop: 20, color: 'white' }}
          icon={<Menu />}
          onClick={this.handleDrawerToggle}
        />
      )}
      <MobileDrawer
        {...this.props}
        open={this.state.drawerOpen}
        handleDrawerToggle={this.handleDrawerToggle}
      />
    </div>
  )

  renderDesktopMenu = () => (
    <div className="Header-menu">
      <MenuLinkItem title="Home" path={paths.home} activePath={this.props.location.pathname} />
      <MenuLinkItem
        path={paths.workProcess}
        title="Work Process"
        activePath={this.props.location.pathname}
      />
      <MenuLinkItem
        path={paths.aboutUs}
        title="About Us"
        activePath={this.props.location.pathname}
      />
      <MenuLinkItem path={paths.blog} title="Blog" activePath={this.props.location.pathname} />
      <MenuLinkItem
        path={paths.contactUs}
        title="Contact Us"
        activePath={this.props.location.pathname}
      />
    </div>
  )

  render () {
    return (
      <div className="Header">
        {this.props.location.pathname === '/workprocess' ||
        this.props.location.pathname === '/contactus' ||
        this.props.location.pathname === '/blog' ? (
          <a href="/">
            <img
              src={require('../assets/viklogga_4_svart.png')}
              width="65"
              height="65"
              alt="logo"
            />
          </a>
        ) : (
          <a href="/">
            <img
              src={require('../assets/viklogga_4_vit.png')}
              width="65"
              height="65"
              alt="logo"
            />
          </a>
        )}
        <MediaQuery minDeviceWidth={769}>{this.renderDesktopMenu()}</MediaQuery>
        <MediaQuery maxDeviceWidth={768}>{this.renderMobileMenu()}</MediaQuery>
      </div>
    )
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
}

const WithRouter = withRouter(Header)

export default Responsive(WithRouter)
