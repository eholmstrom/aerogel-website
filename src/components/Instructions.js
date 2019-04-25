import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactGA from 'react-ga'

import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

import AlertDialog from './AlertDialog'
import '../styles/Instructions.css'
import * as API from '../constants'
import MediaQuery from 'react-responsive'
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper'
import Button from './Button'
import TextMobileStepper from './GridListStepper'

import '../styles/ProcessStepper.css'

const titleColor = '#3a5b6c'

const step1 = {
  title: <h2 style={{ color: titleColor }}>CREATING A PROTOTYPE</h2>,
  content: (
    <div className="contentWrapper">
      <p>
        The first step in the work process is to create a prototype.
        <br />
        <br />
        This is an important step, determining if the product is easy to work with and if production
        is scaleable.
      </p>
      <img src={require('../assets/research.jpg')} alt="surfer-bw" width="668" height="447" />
    </div>
  ),
}

const step2 = {
  title: <h2 style={{ color: titleColor }}>MEASUREMENTS</h2>,
  content: (
    <div className="contentWrapper">
      <p>
        Theoretically our material should add performance to the water sport user. To assure you
        about the quality of our product we need to do measurements regarding insulation, elasticity
        and durability. These measurements will give us quantitive information about our product's
        performance compared to current wetsuits.
      </p>
      <img src={require('../assets/chart_insulation.png')} alt="surfer-bw" width="668" height="418" />
    </div>
  ),
}

const step3 = {
  title: <h2 style={{ color: titleColor }}>LAUNCHING OUR WETSUIT</h2>,
  content: (
    <div className="contentWrapper">
      <p>
        When the optimal structure has been determined together with functioning material
        performance we can begin the launch of our wetsuit.
      </p>
      <img src={require('../assets/green_seaview.jpg')} alt="surfer-bw" width="668" height="445" />
    </div>
  ),
}

const buttonWrapperStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  display: 'flex',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  justifyContent: 'space-between',
  width: '100%',
}

const ResponsiveStepper = ({ children, ...rest }, // eslint-disable-line
) => (
  <span>
    <MediaQuery maxDeviceWidth={768}>
      <Stepper style={{ marginLeft: -2, marginBottom: 80 }} orientation="vertical" {...rest}>
        {children}
      </Stepper>
    </MediaQuery>
    <MediaQuery minDeviceWidth={769}>
      <Stepper orientation="horizontal" {...rest}>
        {children}
      </Stepper>
    </MediaQuery>
  </span>
)

// eslint-disable-next-line
const ResponsiveStepContent = ({ children, ...rest }) => (
  <MediaQuery maxDeviceWidth={768}>
    <StepContent {...rest}>{children}</StepContent>
  </MediaQuery>
)

 // eslint-disable-next-line
class Instructions extends Component {
    static disabledPrimaryButtonCheck (stepIndex) {
    if (stepIndex === 2) {
      return 'disabled'
    }
    return 'tertiary'
  }

  static disabledSecondaryButtonCheck (stepIndex) {
    if (stepIndex === 0) {
      return 'disabled'
    }
    return 'secondary'
  }

  state = {
    stepIndex: 0,
  }

  getStepContent (stepIndex) {
    switch (stepIndex) {
      case 0:
        return this.renderView(step1)
      case 1:
        return this.renderView(step2)
      case 2:
        return this.renderView(step3)
      default:
        return 'wehejnej'
    }
  }

  handlePrev = () => {
    const { stepIndex } = this.state
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 })
    }
  }

  handleNext = () => {
    const { stepIndex } = this.state
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 })
    }
  }

  renderView = step => (
    <div>
      {step.title}
      {step.content}
    </div>
  )
  
 

  render () {
    return (
      <div className="contact-wrapper">
        <h1> Instructions for applying <br/></h1>
        <h1 style={{ textTransform: 'lowercase', color: 'black'}}> vikfix </h1>
        <div className="instructionWrapper">
            <img src={require('../assets/Instructions_website_1.png')} alt="product" width="200" height="290" />
            <img src={require('../assets/instructions_website_2.png')} alt="product" width="200" height="290" />
            <img src={require('../assets/instructions_website_3.png')} alt="product" width="200" height="290" />
        </div>
        <div className="instructionWrapper">
            <img src={require('../assets/instructions_website_4.png')} alt="product" width="200" height="290" />
            <img src={require('../assets/instructions_website_5.png')} alt="product" width="200" height="290" />
            <img src={require('../assets/instructions_website_6.png')} alt="product" width="200" height="290" />
        </div>
      </div>
    )
  }
}
/* <div>
  <h1>Contact us</h1>
  <p>
    The contact form is currently under development. <br />To contact us use this
    information for now.
  </p>
  {team()}
</div> */

export default Instructions
