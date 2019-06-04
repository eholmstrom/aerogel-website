import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Responsive from 'react-responsive-decorator'
import MediaQuery from 'react-responsive'
import Button from '../components/Button'

import '../styles/Welcome.css'

const style = {
  buttonStyle: {
    fontSize: 22,
    margin: 20,
    padding: '20px',
    minWidth: '20vw',
    borderRadius: 5,
    boxShadow: '2px 2px 60px rgba(0, 0, 0, 0.5)',
  },
  buttonStyleMobile: {
    fontSize: 16,
    margin: '20px 5px 5px 5px',
    padding: '20px',
    minWidth: '20vw',
    borderRadius: 5,
    boxShadow: '2px 2px 60px rgba(0, 0, 0, 0.5)',
  },
}

const renderLoggedOut = () => (
  <div className="homeWrapper">
    <div className="home-text">
      <img src={require('../assets/viklogga_4_blue.png')} alt="logo" width="160" height="160" />
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
        <i className="material-icons" style={{ fontSize: '80px' }}>
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
        src={require('../assets/icon_simplicity.png')}
        alt="surfer-bw"
        width="230"
        height="200"
      />
      <h2>Simplicity</h2>
      <div className="divider" />
      <p>
        {' '}
        Watersport products that are easy to use and apply. We develop our products for you to spend
        more time in the water than on land.
      </p>
    </div>
    <div className="oneBox">
      <img src={require('../assets/icon_plant3.png')} alt="rubber-tree" width="230" height="200" />
      <h2>Sustainability</h2>
      <div className="divider" />
      <p>
        {' '}
        Products that are non-toxic and environmentally friendly. The material used is based on
        renewable resources that can be harvested continuously from our growing forests. And we can
        proudly say: no petroleum sources are used.
      </p>
    </div>
    <div className="oneBox">
      <img src={require('../assets/icon_running.png')} alt="porosity" width="230" height="200" />
      <h2>Performance</h2>
      <div className="divider" />
      <p>
        {' '}
        No compensation on quality or performance. Sustainable products must be as good or better
        than already existing alternatives.
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
// { ' ' } 229 130 px

/*               <Fade delay={1000}>
{ ' ' }
<div className="top-right">
  <p className="top-right-p">Sustainable surf accessories</p>
  <div className="divider-mini" />
</div>
              </Fade > */

export default Welcome
