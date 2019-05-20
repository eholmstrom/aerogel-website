import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactGA from 'react-ga'

import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

import AlertDialog from './AlertDialog'
import * as API from '../constants'
import MediaQuery from 'react-responsive'
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper'
import Button from './Button'
import TextMobileStepper from './GridListStepper'

import '../styles/Instructions.css'

const titleColor = '#3a5b6c'

const step1 = {
  content: (
    <div className="contentWrapper">
      <img
        src={require('../assets/Instructions_website_1.png')}
        alt="surfer-bw"
        width="250"
        height="298"
      />
    </div>
  ),
}

const step2 = {
  content: (
    <div className="contentWrapper">
      <img
        src={require('../assets/instructions_website_2.png')}
        alt="surfer-bw"
        width="250"
        height="262"
      />
    </div>
  ),
}

const step3 = {
  content: (
    <div className="contentWrapper">
      <img
        src={require('../assets/instructions_website_3.png')}
        alt="surfer-bw"
        width="200"
        height="310"
      />
    </div>
  ),
}

const step4 = {
  content: (
    <div className="contentWrapper">
      <img
        src={require('../assets/instructions_website_4.png')}
        alt="surfer-bw"
        width="225"
        height="334"
      />
    </div>
  ),
}

const step5 = {
  content: (
    <div className="contentWrapper">
      <img
        src={require('../assets/instructions_website_5.png')}
        alt="surfer-bw"
        width="250"
        height="307"
      />
    </div>
  ),
}

const step6 = {
  content: (
    <div className="contentWrapper">
      <img
        src={require('../assets/instructions_website_6.png')}
        alt="surfer-bw"
        width="285"
        height="241"
      />
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
    if (stepIndex === 5) {
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
      case 3:
        return this.renderView(step4)
      case 4:
        return this.renderView(step5)
      case 5:
        return this.renderView(step6)
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
    if (stepIndex < 5) {
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
    const { stepIndex } = this.state
    const buttons = [
      <Button
        key="btn-1"
        title="Back"
        type={Instructions.disabledSecondaryButtonCheck(stepIndex)}
        onClick={this.handlePrev}
        style={{ marginRight: 12 }}
      />,
      <Button
        key="btn-2"
        title="Continue"
        type={Instructions.disabledPrimaryButtonCheck(stepIndex)}
        onClick={this.handleNext}
      />,
    ]
    return (
      <div className="contact-wrapper">
        <MediaQuery minDeviceWidth={769}>
          <h1>
            {' '}
            Instructions for applying <br />
          </h1>
          <h1 style={{ textTransform: 'lowercase', color: 'black' }}> vikfix </h1>
          <div className="instructionWrapper">
            <img
              src={require('../assets/Instructions_website_1.png')}
              alt="product"
              width="250"
              height="298"
            />
            <img
              src={require('../assets/instructions_website_2.png')}
              alt="product"
              width="250"
              height="262"
            />
            <img
              src={require('../assets/instructions_website_3.png')}
              alt="product"
              width="200"
              height="310"
            />
          </div>
          <div className="instructionWrapper">
            <img
              src={require('../assets/instructions_website_4.png')}
              alt="product"
              width="225"
              height="334"
            />
            <img
              src={require('../assets/instructions_website_5.png')}
              alt="product"
              width="250"
              height="307"
            />
            <img
              src={require('../assets/instructions_website_6.png')}
              alt="product"
              width="285"
              height="241"
            />
          </div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={769}>
          <div
            style={{
              width: '100%',
              maxWidth: 700,
              margin: '0 auto 0 auto',
            }}
          >
            <ResponsiveStepper linear={false} activeStep={stepIndex}>
              <Step>
                <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                  Prepare the damaged area
                </StepButton>
                <ResponsiveStepContent>{this.getStepContent(0)}</ResponsiveStepContent>
              </Step>
              <Step>
                <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                  Sand the damaged area
                </StepButton>
                <ResponsiveStepContent>{this.getStepContent(1)}</ResponsiveStepContent>
              </Step>
              <Step>
                <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
                  Heat up the patch
                </StepButton>
                <ResponsiveStepContent>{this.getStepContent(2)}</ResponsiveStepContent>
              </Step>
              <Step>
                <StepButton onClick={() => this.setState({ stepIndex: 3 })}>
                  Attach the patch
                </StepButton>
                <ResponsiveStepContent>{this.getStepContent(3)}</ResponsiveStepContent>
              </Step>
              <Step>
                <StepButton onClick={() => this.setState({ stepIndex: 4 })}>
                  Adjust the patch
                </StepButton>
                <ResponsiveStepContent>{this.getStepContent(4)}</ResponsiveStepContent>
              </Step>
              <Step>
                <StepButton onClick={() => this.setState({ stepIndex: 5 })}>
                  Sand down the area
                </StepButton>
                <ResponsiveStepContent>{this.getStepContent(5)}</ResponsiveStepContent>
              </Step>
            </ResponsiveStepper>
          </div>
          <div style={buttonWrapperStyle}>{buttons}</div>
        </MediaQuery>
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
