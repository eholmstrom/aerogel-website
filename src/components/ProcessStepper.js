import React from 'react'
import MediaQuery from 'react-responsive'
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper'
import Button from './Button'

const titleColor = '#3a5b6c'

const step1 = {
  title: <h2 style={{ color: titleColor }}>CREATING A PROTOTYPE</h2>,
  content: (
    <div>
      <p>
        The first step in the work process is to create a prototype. <br />
        <br /> With the prototype finished we can commence the thermal conductivity measurements.
      </p>
      <img src={require('../assets/meeting2.jpg')} alt="meeting" width="50%" />
    </div>
  ),
}

const step2 = {
  title: <h2 style={{ color: titleColor }}>MEASUREMENTS</h2>,
  content: (
    <p>
      Secondly, measurements must be performed to obtain information about elasticity, durability as
      well as the insulation properties. The thermal conductivity measurements will give us
      quantitive information about the products performance compared to current wetsuits.
    </p>
  ),
}

const step3 = {
  title: <h2 style={{ color: titleColor }}>LAUNCHING OUR WETSUIT</h2>,
  content: (
    <p>
      When the optimal structure has been determined together with functioning material performance
      we can begin the launch of the wetsuit.
    </p>
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

class ProcessStepper extends React.Component {
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
    const { stepIndex } = this.state
    const buttons = [
      <Button
        key="btn-1"
        title="Back"
        type={ProcessStepper.disabledSecondaryButtonCheck(stepIndex)}
        onClick={this.handlePrev}
        style={{ marginRight: 12 }}
      />,
      <Button
        key="btn-2"
        title="Continue"
        type={ProcessStepper.disabledPrimaryButtonCheck(stepIndex)}
        onClick={this.handleNext}
      />,
    ]
    return (
      <div
        style={{
          width: '100%',
          maxWidth: 700,
          margin: '0 auto 0 auto',
        }}
      >
        <MediaQuery minDeviceWidth={769}>
          <h1
            style={{
              color: '#3a5b6c',
              textAlign: 'center',
              marginBottom: 60,
              marginTop: 60,
            }}
          >
            WORK PROCESS
          </h1>
        </MediaQuery>
        <ResponsiveStepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
              Creating a prototype
            </StepButton>
            <ResponsiveStepContent>{this.getStepContent(0)}</ResponsiveStepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({ stepIndex: 1 })}>Measurements</StepButton>
            <ResponsiveStepContent>{this.getStepContent(1)}</ResponsiveStepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
              Launching our wetsuit
            </StepButton>
            <ResponsiveStepContent>{this.getStepContent(2)}</ResponsiveStepContent>
          </Step>
        </ResponsiveStepper>
        <div>
          <MediaQuery minDeviceWidth={769}>
            <div style={{ minHeight: 250, padding: '0 16px' }}>
              {this.getStepContent(stepIndex)}
            </div>
          </MediaQuery>

          <MediaQuery maxDeviceWidth={768}>
            <div style={buttonWrapperStyle}>{buttons}</div>
          </MediaQuery>

          <MediaQuery minDeviceWidth={769}>{buttons}</MediaQuery>
        </div>
      </div>
    )
  }
}

export default ProcessStepper
