import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Button.css'

const buttonStylePink = {
  background: '#fcbbcc',
  color: 'white',
  textTransform: 'uppercase',
  border: 'none',
  cursor: 'pointer',
  outline: 0,
}

const buttonStyleSecondary = {
  ...buttonStylePink,
  background: 'none',
  color: '#26965b', // '#77c9d4',
}

const buttonStyleDisable = {
  ...buttonStylePink,
  background: '#e5e5e5',
  color: '#a0a0a0',
  opacity: 1,
  cursor: 'default',
  transform: 'none',
}

const buttonStyleRounded = {
  ...buttonStylePink,
  fontWeight: 'none',
  background: '#26965b', // '#77c9d4', // Large button welcome page.
}

const smallSize = {
  fontSize: 16,
  margin: 10,
  padding: '8px 15px',
}

const mediumSize = {
  fontSize: 20,
  margin: 10,
  padding: '12px 15px',
}

const largeSize = {
  fontSize: 24,
  margin: 20,
  padding: '20px 15px 15px 15px',
}

const Button = ({
  // eslint-disable-next-line
  onClick,
  title,
  type,
  style,
  small,
  medium,
  large,
  rounded,
  className,
  buttonType,
}) => {
  let buttonStyle = buttonStylePink
  if (type === 'secondary') {
    buttonStyle = buttonStyleSecondary
  } else if (type === 'disabled') {
    buttonStyle = buttonStyleDisable
  } else if (type === 'tertiary') {
    buttonStyle = buttonStyleRounded
  }

  if (small) {
    buttonStyle = { ...buttonStyle, ...smallSize }
  } else if (large) {
    buttonStyle = { ...buttonStyle, ...largeSize }
  } else {
    buttonStyle = { ...buttonStyle, ...mediumSize }
  }

  if (rounded) {
    buttonStyle = { ...buttonStyle, borderRadius: 60 }
  }

  return (
    <button
      className={`button${` ${className}`}`}
      onClick={type === 'disabled' ? () => {} : onClick}
      style={{ ...buttonStyle, ...style }}
      type={buttonType}
    >
      {title}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'disabled']),
  buttonType: PropTypes.oneOf(['button', 'submit']),
  style: PropTypes.object, // eslint-disable-line
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  rounded: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  type: 'primary',
  buttonType: 'button',
  style: {},
  small: false,
  medium: false,
  large: false,
  rounded: false,
  className: '',
}

export default Button
