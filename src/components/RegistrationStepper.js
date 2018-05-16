import React from 'react'
import MediaQuery from 'react-responsive'
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper'
import Button from './Button'

const titleColor = '#2980b9'

const step1 = {
  title: <h2 style={{ color: titleColor }}>CREATING A PROTOTYPE</h2>,
  content: (
    <p>
      The first step in the registration process either here on karnevalist.se or in the mobile
      application (Karnevalist 2018). When you have created your profile on the cyberweb you are
      ready for "Uppropet" the 4th of Feburary in AF-borgen. <br />
      <br />
      <b>NOTICE</b>: You need to be a member in the Academic Society (AF), union and nation
      (Studentlund), or being a supporting member of the Academic Society.
    </p>
  ),
}

const step2 = {
  title: <h2 style={{ color: titleColor }}>TESTING THE INSULATION PROPERTIES</h2>,
  content: (
    <p>
      You check in on the call day, "Uppropet", using your personal number. The staff on location
      will help you with everything!<br />
      <br />
      After the check in you will be able to choose what section of the 33 available you want to
      join, this will be done in the mobile app! When you are happy with your choices you may submit
      them, and you will now be registered!<br />
      <br />
      After the check in you will be able to buy a ticket for the huge and awesome "Karnevelj", a
      party with 3000 people attending!
    </p>
  ),
}

const step3 = {
  title: <h2 style={{ color: titleColor }}>LAUNCHING OUR WETSUIT</h2>,
  content: (
    <p>
      Two weeks after "Uppropet" you get the information about what section you will belong to!
      It&apos;s now when you got your section that you are finally an awesome "Karnevalist"!
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

class RegistrationStepper extends React.Component {
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
        type={RegistrationStepper.disabledSecondaryButtonCheck(stepIndex)}
        onClick={this.handlePrev}
        style={{ marginRight: 12 }}
      />,
      <Button
        key="btn-2"
        title="Continue"
        type={RegistrationStepper.disabledPrimaryButtonCheck(stepIndex)}
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
          <h1 style={{ textAlign: 'center', marginBottom: 80, marginTop: 60 }}>
            ABOUT THE WORK PROCESS
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
            <StepButton onClick={() => this.setState({ stepIndex: 1 })}>Testing the insulation properties</StepButton>
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

export default RegistrationStepper
