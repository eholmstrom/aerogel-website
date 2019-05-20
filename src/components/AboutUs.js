import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Responsive from 'react-responsive-decorator'
import MediaQuery from 'react-responsive'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import * as Scroll from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Button from '../components/Button'
import * as API from '../constants'

import '../styles/AboutUs.css'

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

const projectSummary = () => (
  <div className="projectSummary">
    <h1>About the project</h1>
    <p>
      {' '}
      <h3>
        About you and <i>vik</i>
      </h3>
      <p>
        Welcome to <i>Vik Sports</i> and future of sustainable watersport products. We are dedicated
        to offer you sustainable products with superior performance, you deserve it!
      </p>
      <h3>What are the problems today?</h3>
      <p>
        Where should we start? Looking at both wetsuits and surfboards, the common source is
        petroleum. Ironic considering our close connection to nature when practicing watersports!
        The synthetic revolution has made us forget about natural materials that have been used for
        thousands of years. There are possibilities to create incredible products with natural,
        sustainable resources and we believe that is the way forward.
      </p>
      <h3>So?</h3>
      <p>
        We are on a mission trying to make it easier for you to choose products that are healthy for
        you and for the environment. We believe it is important not to compromise on quality and
        performance when choosing sustainable products.
      </p>
      <h3>And who are we?</h3>
      <p>
        For now, we are two people running <i>Vik Sports</i>, Jakob Mattsson and Eric Holmström.
        Background in nanotechnology and a passion for surfing has been the seed for this idea to
        grow.
      </p>
    </p>
  </div>
)

const team = () => (
  <div className="team">
    <h2 style={{ marginLeft: '10px' }}>Team</h2>
    <div className="contact-two-containers">
      <div className="contact-container">
        <div>
          <img
            src={require('../assets/eric_profile.jpg')}
            alt="Eric Profile"
            width="250"
            height="250"
          />
        </div>
        <div>
          <p>
            {' '}
            Eric Holmström <br /> <i className="material-icons">phone</i>{' '}
            <a style={{ color: '#000000' }} href="tel:+46768654806">
              {' '}
              +46 768 65 48 06{' '}
            </a>{' '}
            <br />
            <i className="material-icons">mail</i>
            <a style={{ color: '#000000' }} href="mailto:eric@viksports.org">
              {' '}
              eric@viksports.org{' '}
            </a>
          </p>
        </div>
      </div>
      <div className="contact-container">
        <div>
          <img
            src={require('../assets/jakob_profile.jpg')}
            alt="Jakob Profile"
            width="250"
            height="250"
          />
        </div>
        <div>
          <p>
            {' '}
            Jakob Mattsson <br /> <i className="material-icons">phone</i>{' '}
            <a style={{ color: '#000000' }} href="tel:+46730456778">
              {' '}
              +46 730 45 67 78{' '}
            </a>{' '}
            <br />
            <i className="material-icons">mail</i>
            <a style={{ color: '#000000' }} href="mailto:jakob@viksports.org">
              {' '}
              jakob@viksports.org{' '}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

const MyMapComponent = withScriptjs(withGoogleMap(props => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 55.71188069, lng: 13.2152372 }}>
    {props.isMarkerShown && <Marker position={{ lat: 55.71188069, lng: 13.2152372 }} />}
  </GoogleMap>
)))

class AboutUs extends Component {
  componentWillMount () {}

  render () {
    return (
      <div>
        <div className="main-div">
          {' '}
          <Scroll.Link activeClass="active" to="aboutUs" spy smooth offset={0} duration={700}>
            <i className="material-icons" style={{ fontSize: '100px' }}>
              keyboard_arrow_down
            </i>
          </Scroll.Link>
        </div>
        <div className="main-div-aboutUs" id="aboutUs">
          <Fade>
            <div className="aboutUsWrapper">
              <div>{projectSummary()}</div>
              <div>{team()}</div>
              <div>
                <h2 style={{ marginLeft: '10px' }}>Find us here</h2>
                <p style={{ marginLeft: '10px' }}> VentureLab at Scheelevägen 15, 223 70 Lund </p>
                {
                  <MyMapComponent
                    isMarkerShown
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
                      API.API_KEY_MAPS
                    }&callback=initialize&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '400px' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                  />
                }
              </div>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}

export default AboutUs
