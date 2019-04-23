import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactGA from 'react-ga'

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

  render () {
    return (
      <div className="contact-wrapper">
        <h1> Instructions for applying <br/></h1>
        <h1 style={{ textTransform: 'lowercase', color: 'black'}}> vikfix </h1>
        <h3 style={{ marginTop: '100px' }}> Nothing here yet!<br/>This is currently under development. We will update this page as soon as possible.</h3>
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
