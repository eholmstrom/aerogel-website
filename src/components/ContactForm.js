import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

import AlertDialog from './AlertDialog'
import Button from '../components/Button'
import '../styles/ContactForm.css'
import * as API from '../constants'

// eslint-disable-next-line
class BookForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
      sent: false,
      error: false,
    }
  }

  setChange = (key, val) => {
    this.setState({ [key]: val })
  }

  handleSubmit = (e) => {
    const payload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      phoneNumber: this.state.phoneNumber,
    }
    console.log(payload)
    const API_URL = API.API_KEY_AWSLAMBDA

    fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(
      () => {
        this.setState({ sent: true })
      },
      () => {
        this.setState({ error: true })
      },
    )
    this.setState({ sent: true })
    this.setState({
      name: '',
      email: '',
      message: 'Success! \nMessage was sent. \n\nThank you! We will be in touch with you shortly.',
      phoneNumber: '',
    })
    e.preventDefault()
    // this.setState({ message: 'Error! \nMessage was not sent. \n\nPlease fill in all fields.' })
  }

  render () {
    return (
      <div className="contact-wrapper">
        <div className="contactform">
          <TextField
            fullWidth
            value={this.state.name}
            floatingLabelText="Name"
            hintText="Name"
            onChange={(evt, val) => this.setChange('name', val)}
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
            value={this.state.email}
            onChange={(evt, val) => this.setChange('email', val)}
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
        {this.state.name !== '' && this.state.email !== '' && this.state.message !== '' ? (
          <Button title="Send" type="tertiary" onClick={this.handleSubmit} />
        ) : (
          <Button title="Send" type="disabled" />
        )}
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

export default BookForm
