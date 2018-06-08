import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

import '../styles/Welcome.css'

const style = {
  buttonStyle: {
    fontSize: 24,
    margin: 20,
    padding: '30px 25px 25px 25px',
    minWidth: '20vw',
    borderRadius: 3,
    boxShadow: '2px 2px 60px rgba(0, 0, 0, 0.5)',
  },
}

const renderLoggedOut = () => (
  <div className="homeWrapper">
    <div className="home-text">
      <h1>Aquano</h1>
      <p>Developing wetsuits without restrictions.</p>
    </div>
    <div className="buttonWrapper">
      <Link className="learn-more" to="/aboutus">
        <Button style={style.buttonStyle} title="Learn More" type="tertiary" />
      </Link>
    </div>
  </div>
)

class Welcome extends Component {
  componentWillMount () {}

  render () {
    return <div className="Welcome">{renderLoggedOut()}</div>
  }
}

export default Welcome
