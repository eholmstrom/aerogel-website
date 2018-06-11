import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Responsive from 'react-responsive-decorator'
import MediaQuery from 'react-responsive'
import Button from '../components/Button'

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
      <h3>About you and Aquano</h3>
      <p>
        Welcome to Aquano and the future of watersport wetsuits. We are dedicated to give you a
        sustainable wetsuit with superior properties, you deserve it!
      </p>
      <h3>What are the problems today?</h3>
      <p>
        Oil!! Wetsuits are generally made out of raw oil and for sports like surfing and diving that
        are so related to nature itself, it’s quite ironic. And it doesn’t stop there. Wearing a
        wetsuit today, your performance is reduced drastically because of the superthick suit you
        have to jump into. Not talking about the claustrophobic feeling…
      </p>
      <h3>So?</h3>
      <p>
        At Aquano we combine the latest knowledge in material science with completely unique designs
        to create wetsuits that are sustainable and have extraordinary insulating and mechanical
        properties. We want you to love your wetsuit.
      </p>
      <h3>And who are we?</h3>
      <p>
        For now we are two persons running Aquano, Jakob Mattsson and Eric Holmström. Background in
        Nanotechnology and passion for surfing has been the seed for this idea to grow.
      </p>
    </p>
  </div>
)

const team = () => (
  <div className="team">
    <h2>Team</h2>
    <div style={{ width: '50%', display: 'inline-flex', alignSelf: 'center' }}>
      <img
        src={require('../assets/eric_profile.PNG')}
        alt="Eric Profile"
        width="250"
        height="250"
      />
    </div>
    <div style={{ display: 'inline-flex' }}>
      <img
        src={require('../assets/jakob_profile.PNG')}
        alt="Jakob Profile"
        width="250"
        height="250"
      />
    </div>
    <div style={{ width: '50%', display: 'inline-flex', alignSelf: 'center' }}>
      <p>
        {' '}
        Eric Holmström <br /> <i className="material-icons">phone</i>{' '}
        <a style={{ color: '#000000' }} href="tel:+46768654806">
          {' '}
          +46 768 65 48 06{' '}
        </a>{' '}
        <br />
        <i className="material-icons">mail</i>
        <a style={{ color: '#000000' }} href="mailto:eric_holmstrom@hotmail.com">
          {' '}
          eric_holmstrom@hotmail.com{' '}
        </a>
      </p>
    </div>
    <div style={{ display: 'inline-flex' }}>
      <p>
        {' '}
        Jakob Mattsson <br /> <i className="material-icons">phone</i>{' '}
        <a style={{ color: '#000000' }} href="tel:+46730456778">
          {' '}
          +46 730 45 67 78{' '}
        </a>{' '}
        <br />
        <i className="material-icons">mail</i>
        <a style={{ color: '#000000' }} href="mailto:jammattsson@mac.com">
          {' '}
          jammattsson@mac.com{' '}
        </a>
      </p>
    </div>
  </div>
)

const renderMobileTeam = () => (
  <div className="team">
    <h2>Team</h2>
    <div style={{ width: '100%', display: 'inline-flex', alignSelf: 'center' }}>
      <img
        src={require('../assets/eric_profile.PNG')}
        alt="Eric Profile"
        width="250"
        height="250"
      />
    </div>
    <div style={{ width: '100%', display: 'inline-flex', alignSelf: 'center' }}>
      <p>
        {' '}
        Eric Holmström <br /> <i className="material-icons">phone</i>{' '}
        <a style={{ color: '#000000' }} href="tel:+46768654806">
          {' '}
          +46 768 65 48 06{' '}
        </a>{' '}
        <br />
        <i className="material-icons">mail</i>
        <a style={{ color: '#000000' }} href="mailto:eric_holmstrom@hotmail.com">
          {' '}
          eric_holmstrom@hotmail.com{' '}
        </a>
      </p>
    </div>
    <div style={{ display: 'inline-flex' }}>
      <img
        src={require('../assets/jakob_profile.PNG')}
        alt="Jakob Profile"
        width="250"
        height="250"
      />
    </div>

    <div style={{ display: 'inline-flex' }}>
      <p>
        {' '}
        Jakob Mattsson <br /> <i className="material-icons">phone</i>{' '}
        <a style={{ color: '#000000' }} href="tel:+46730456778">
          {' '}
          +46 730 45 67 78{' '}
        </a>{' '}
        <br />
        <i className="material-icons">mail</i>
        <a style={{ color: '#000000' }} href="mailto:jammattsson@mac.com">
          {' '}
          jammattsson@mac.com{' '}
        </a>
      </p>
    </div>
  </div>
)

class AboutUs extends Component {
  componentWillMount () {}

  render () {
    return (
      <div className="aboutUsWrapper">
        <div>{projectSummary()}</div>
        <MediaQuery minDeviceWidth={768}>{team()} </MediaQuery>
        <MediaQuery maxDeviceWidth={768}>{renderMobileTeam()}</MediaQuery>
      </div>
    )
  }
}

export default AboutUs
