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
      <img src={require('../assets/logo2_1.png')} alt="logo" width="307" height="80" />
      <p>Developing wetsuits without restrictions.</p>
    </div>
    <div className="buttonWrapper">
      <Link className="learn-more" to="/aboutus">
        <Button style={style.buttonStyle} title="Learn More" type="tertiary" />
      </Link>
    </div>
  </div>
)

const renderTripleBoxes = () => (
  <div className="boxWrapper">
    <div className="oneBox">
      <img src={require('../assets/surfer-bw.jpg')} alt="surfer-bw" width="300" height="300" />
      <h2>Performance</h2>
      <div className="divider" />
      <p>
        We've deleveloped a way for increasing the flexibility allowing for easier movement for the
        wearer while improving the insulation properties keeping you warm during long sessions.{' '}
      </p>
    </div>
    <div className="oneBox">
      <img
        src={require('../assets/rubber-tree_small.jpg')}
        alt="rubber-tree"
        width="300"
        height="300"
      />
      <h2>Sustainability</h2>
      <div className="divider" />
      <p>Wetsuits made from renewable materials.</p>
    </div>
    <div className="oneBox">
      <img src={require('../assets/porosity.jpg')} alt="porosity" width="300" height="300" />
      <h2>Nanotechnology</h2>
      <div className="divider" />
      <p>
        Introducing nanotechnology to watersports. This new kind of wetsuit keeps you warm while
        improving the flexibility of the suit.
      </p>
    </div>
  </div>
)

class Welcome extends Component {
  componentWillMount () {}

  render () {
    return (
      <div>
        <div className="Welcome">{renderLoggedOut()}</div>
        <div className="tripleBoxesWrapper"> {renderTripleBoxes()}</div>
      </div>
    )
  }
}

export default Welcome
