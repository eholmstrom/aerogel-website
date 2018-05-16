import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router-dom'

const MenuButton = ({ title, active }) => (
  <FlatButton
    className={`Header-button-menu
      ${active ? 'Header-button-menu-active' : ''}`}
    style={{ color: 'white' }}
  >
    {title}
  </FlatButton>
)

const MenuLinkItem = props => (
  <Link className="Header-menu-link" to={props.path}>
    <MenuButton title={props.title} active={props.path === props.activePath} />
  </Link>
)

MenuButton.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
}

export default MenuLinkItem
