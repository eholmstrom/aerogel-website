import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import Close from 'material-ui/svg-icons/navigation/close'
import { paths } from '../../containers/App'

const styles = {
  drawer: {
    backgroundColor: '#8a4797',
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
    backgroundColor: '#f4376d',
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
      title="About Registration"
      path={paths.aboutRegistration}
      activePath={props.location.pathname}
      onClick={props.handleDrawerToggle}
    />
    {props.loggedIn && (
      <MobileMenuItem
        path={paths.settings}
        title="Settings"
        activePath={props.location.pathname}
        onClick={props.handleDrawerToggle}
      />
    )}
    {props.admin && (
      <MobileMenuItem
        path={paths.userList}
        title="User List"
        activePath={props.location.pathname}
        onClick={props.handleDrawerToggle}
      />
    )}
  </Drawer>
)

export default MobileDrawer
