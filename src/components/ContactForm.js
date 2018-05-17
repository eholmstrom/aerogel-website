import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

import Button from '../components/Button'
import '../styles/ContactForm.css'

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
          <div className="contactform">
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
          <Button title="Send" type="tertiary" onClick={this.onConfirm} />
        </div>
      </div>
    )
  }
}

export default BookForm
