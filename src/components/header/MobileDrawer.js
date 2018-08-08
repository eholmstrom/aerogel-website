import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import Close from 'material-ui/svg-icons/navigation/close'
import { paths } from '../../containers/App'

const styles = {
  drawer: {
    backgroundColor: '#3a5b6c',
    padding: 0,
  },

  mobileMenuItem: {
    color: 'white',
    fontSize: 18,
    width: 340,
    marginLeft: -20,
    paddingLeft: 20,
  },

  mobileMenuItemActive: {
    backgroundColor: '#77c9d4',
  },

  menuButton: {
    marginTop: 20,
  },

  closeButton: {
    color: 'white',
    marginTop: 20,
    marginLeft: -20,
    marginBottom: 20,
  },
}

const MobileMenuItem = props => (
  <MenuItem>
    <Link to={props.path} onClick={props.onClick}>
      <div
        style={{
          ...styles.mobileMenuItem,
          ...(props.path === props.activePath && styles.mobileMenuItemActive),
        }}
      >
        {props.title}
      </div>
    </Link>
  </MenuItem>
)

const MobileDrawer = props => (
  <Drawer containerStyle={styles.drawer} open={props.open}>
    <FlatButton style={styles.closeButton} icon={<Close />} onClick={props.handleDrawerToggle} />
    <MobileMenuItem
      title="Home"
      path={paths.home}
      activePath={props.location.pathname}
      onClick={props.handleDrawerToggle}
    />
    <MobileMenuItem
      title="Work Process"
      path={paths.workProcess}
      activePath={props.location.pathname}
      onClick={props.handleDrawerToggle}
    />
    <MobileMenuItem
      title="About Us"
      path={paths.aboutUs}
      activePath={props.location.pathname}
      onClick={props.handleDrawerToggle}
    />
    <MobileMenuItem
      title="Blog"
      path={paths.blog}
      activePath={props.location.pathname}
      onClick={props.handleDrawerToggle}
    />
    <MobileMenuItem
      title="Contact Us"
      path={paths.contactUs}
      activePath={props.location.pathname}
      onClick={props.handleDrawerToggle}
    />
  </Drawer>
)

export default MobileDrawer
