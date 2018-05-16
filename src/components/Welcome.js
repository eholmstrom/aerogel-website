import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

import '../styles/Welcome.css'

const style = {
  buttonStyle: {
    fontSize: 24,
    margin: 20,
    padding: '30px 25px 25px 25px',
    minWidth: '25vw',
    borderRadius: 3,
    boxShadow: '2px 2px 60px rgba(0, 0, 0, 0.5)',
  },
}

const renderLoggedOut = () => (
  <Link className="Welcome-register-link" to="/contactus">
    <Button style={style.buttonStyle} title="Contact us" type="tertiary" />
  </Link>
)

class Welcome extends Component {
  componentWillMount () {}

  render () {
    return <div className="Welcome">{renderLoggedOut()}</div>
  }
}

export default Welcome
