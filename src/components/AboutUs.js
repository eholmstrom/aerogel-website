import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        width="200"
        height="300"
      />
    </div>
    <div style={{ display: 'inline-flex', float: 'right' }}>
      <img
        src={require('../assets/jakob_profile.PNG')}
        alt="Jakob Profile"
        width="150"
        height="266"
      />
    </div>
  </div>
)

class AboutUs extends Component {
  componentWillMount () {}

  render () {
    return (
      <div className="aboutUsWrapper">
        <div>{projectSummary()}</div>
        <div>{team()}</div>
      </div>
    )
  }
}

export default AboutUs
