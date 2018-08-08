import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

import Button from '../components/Button'
import '../styles/ContactForm.css'

const team = () => (
  <div className="team" style={{ marginTop: '60px' }}>
    <div className="contact-two-containers" style={{ textAlign: 'left' }}>
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
            <a style={{ color: '#000000' }} href="mailto:eric_holmstrom@hotmail.com">
              {' '}
              eric_holmstrom@hotmail.com{' '}
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
            <a style={{ color: '#000000' }} href="mailto:jammattsson@mac.com">
              {' '}
              jammattsson@mac.com{' '}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

// eslint-disable-next-line
class BookForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      personName: '',
      personEmail: '',
      phoneNumber: '',
      message: '',
    }
  }

  setChange = (key, val) => {
    this.setState({ [key]: val })
  }
  render () {
    return (
      <div className="contact-wrapper">
        <div>
          <h1>Contact us</h1>
          <p>
            The contact form is currently under development. <br />To contact us use this
            information for now.
          </p>
          {team()}
        </div>
      </div>
    )
  }
}
/* <div className="contactform">
            <TextField
              fullWidth
              value={this.state.personName}
              floatingLabelText="Name"
              hintText="Name"
              onChange={(evt, val) => this.setChange('personName', val)}
              type="required"
            />
            <TextField
              fullWidth
              floatingLabelText="Phone number"
              hintText="Phone number"
              required
              value={this.state.phoneNumber}
              onChange={(evt, val) => this.setChange('phoneNumber', val)}
            />
            <TextField
              fullWidth
              floatingLabelText="Email"
              hintText="Email"
              required
              value={this.state.personEmail}
              onChange={(evt, val) => this.setChange('personEmail', val)}
            />
            <TextField
              fullWidth
              floatingLabelText="Message"
              value={this.state.message}
              multiLine
              rows={5}
              onChange={(evt, val) => this.setChange('message', val)}
            />
          </div>
          <Button title="Send" type="tertiary" onClick={this.onConfirm} /> */

export default BookForm
