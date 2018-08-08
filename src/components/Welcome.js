import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import Button from '../components/Button'
import Fade from 'react-reveal/Fade'
import Responsive from 'react-responsive-decorator'
import MediaQuery from 'react-responsive'

import '../styles/Welcome.css'

const style = {
  buttonStyle: {
    fontSize: 22,
    margin: 20,
    padding: '25px 25px 25px 25px',
    minWidth: '20vw',
    borderRadius: 5,
    boxShadow: '2px 2px 60px rgba(0, 0, 0, 0.5)',
  },
  buttonStyleMobile: {
    fontSize: 16,
    margin: '20px 5px 5px 5px',
    padding: '25px 25px 25px 25px',
    minWidth: '20vw',
    borderRadius: 5,
    boxShadow: '2px 2px 60px rgba(0, 0, 0, 0.5)',
  },
}

const renderLoggedOut = () => (
  <div className="homeWrapper">
    <div className="home-text">
      <img src={require('../assets/newviklogga.png')} alt="logo" width="229" height="130" />
      <p>Sustainability for enhanced performance</p>
    </div>
    <div className="buttonWrapper">
      <Link className="learn-more" to="/aboutus">
        <Button style={style.buttonStyle} title="Learn More" type="tertiary" />
      </Link>
      <Scroll.Link activeClass="active" to="features" spy smooth offset={0} duration={700}>
        <i className="material-icons" style={{ fontSize: '100px' }}>
          keyboard_arrow_down
        </i>
      </Scroll.Link>
    </div>
  </div>
)

const renderLoggedOutMobile = () => (
  <div className="homeWrapper">
    <div className="home-text">
      <img src={require('../assets/newviklogga.png')} alt="logo" width="229" height="130" />
      <p>Sustainability for enhanced performance</p>
    </div>
    <div className="buttonWrapper">
      <Link className="learn-more" to="/aboutus">
        <Button style={style.buttonStyleMobile} title="Learn More" type="tertiary" />
      </Link>
      <Scroll.Link activeClass="active" to="features" spy smooth offset={0} duration={700}>
        <i className="material-icons" style={{ fontSize: '100px' }}>
          keyboard_arrow_down
        </i>
      </Scroll.Link>
    </div>
  </div>
)

const renderFeatures = () => (
  <div className="boxWrapper" id="features">
    <div className="oneBox">
      <img
        src={require('../assets/hoddevik_runningsurfer.jpg')}
        alt="surfer-bw"
        width="300"
        height="300"
      />
      <h2>Performance</h2>
      <div className="divider" />
      <p>
        We've deleveloped a way for increasing the flexibility allowing for easier movement for the
        wearer while improving the insulation properties keeping you warm during long sessions.{' '}
      </p>
    </div>
    <div className="oneBox">
      <img
        src={require('../assets/two_surfers_beach.jpg')}
        alt="rubber-tree"
        width="300"
        height="300"
      />
      <h2>Sustainability</h2>
      <div className="divider" />
      <p>
        Wetsuits made from renewable materials. The rubber is harvested from natural rubber trees
        called Hevea brasiliensis instead of synthetic rubber. Other materials used are particularly
        chosen to have as little impact on the environment as possible.
      </p>
    </div>
    <div className="oneBox">
      <img src={require('../assets/porosity.jpg')} alt="porosity" width="300" height="300" />
      <h2>Nanotechnology</h2>
      <div className="divider" />
      <p>
        Introducing nanotechnology to watersports. New development in material research make it
        possible to enhance insulation without increasing the thickness of the suit.
      </p>
    </div>
  </div>
)

class Welcome extends Component {
  componentWillMount () {}

  render () {
    return (
      <div>
        <Fade>
          <div className="Welcome">
            <MediaQuery minDeviceWidth={769}>{renderLoggedOut()}</MediaQuery>
            <MediaQuery maxDeviceWidth={768}>{renderLoggedOutMobile()}</MediaQuery>
          </div>
        </Fade>
        <Fade>{renderFeatures()}</Fade>
      </div>
    )
  }
}

// <div className="featuresWrapper" id="features">
// { ' ' }

export default Welcome
