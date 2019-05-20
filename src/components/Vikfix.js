import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactGA from 'react-ga'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

import AlertDialog from './AlertDialog'
import Button from '../components/Button'
import '../styles/Vikfix.css'
import * as API from '../constants'
import Popup from './Popup'
import DialogToForm from './DialogToForm'

// eslint-disable-next-line
const style = {
  buttonStyle: {
    fontSize: 22,
    margin: 20,
    marginLeft: 0,
    padding: '25px 25px 25px 25px',
    minWidth: '20vw',
    borderRadius: 5,
    // boxShadow: '2px 2px 60px rgba(0, 0, 0, 0.5)',
  },
}

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
      <div className="vikfix-wrapper">
        <div className="vikfix-text">
          <h1 style={{ color: 'black', textTransform: 'lowercase', fontSize: '40px' }}> vikfix </h1>
          <div className="paragraph-pic-box">
            <p>
              The all natural ding fix.
              <br />
              Fix your ding and don't worry about toxic plastics! Be out in the water in less than 5
              minutes!
            </p>
            <Fade right>
              <img
                src={require('../assets/matchbox_no_background2.png')}
                alt="product"
                width="249"
                height="200"
              />
            </Fade>
          </div>
          <div className="vikfix-buttonWrapper">
            <DialogToForm />
            <Link className="learn-more" to="/instructions">
              <Button style={style.buttonStyle} title="Instructions" type="secondary" />
            </Link>
          </div>
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

export default BookForm
