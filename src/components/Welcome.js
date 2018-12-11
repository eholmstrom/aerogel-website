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
      <img src={require('../assets/viklogga_4_vit.png')} alt="logo" width="180" height="180" />
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
      <img src={require('../assets/viklogga_4_vit.png')} alt="logo" width="120" height="120" />
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
      <img src={require('../assets/icon_elastic.png')} alt="surfer-bw" width="300" height="261" />
      <h2>Flexibility</h2>
      <div className="divider" />
      <p>
        We've deleveloped a way for increasing the flexibility allowing for easier movement for the
        wearer while improving the insulation properties keeping you warm during long sessions.{' '}
      </p>
    </div>
    <div className="oneBox">
      <img src={require('../assets/icon_plant.png')} alt="rubber-tree" width="300" height="261" />
      <h2>Sustainability</h2>
      <div className="divider" />
      <p>
        Wetsuits made from renewable materials. The rubber is harvested from natural rubber trees
        called <i>Hevea brasiliensis</i> instead of synthetic rubber. Other materials used are
        particularly chosen to have as little impact on the environment as possible.
      </p>
    </div>
    <div className="oneBox">
      <img src={require('../assets/icon_clock.png')} alt="porosity" width="300" height="261" />
      <h2>Durability</h2>
      <div className="divider" />
      <p>
        By using natural rubber and eliminating all seams, the durability of the wetsuit is
        increased.
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
            <MediaQuery minDeviceWidth={769}>
              <Fade delay={1000}>
                {' '}
                <div className="top-right">
                  <p className="top-right-p">Reinventing wetsuits</p>
                  <div className="divider-mini" />
                </div>
              </Fade>
              {renderLoggedOut()}
            </MediaQuery>
            <MediaQuery maxDeviceWidth={768}>{renderLoggedOutMobile()}</MediaQuery>
          </div>
        </Fade>
        <Fade>{renderFeatures()}</Fade>
      </div>
    )
  }
}

// <div className="featuresWrapper" id="features">
// { ' ' } 229 130 px

export default Welcome
