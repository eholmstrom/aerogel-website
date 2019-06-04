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
import '../styles/FAQ.css'
import * as API from '../constants'
import DialogToForm from './DialogToForm'
import SimpleExpansionPanel from './SimpleExpansionPanel'

// eslint-disable-next-line
const style = {
  buttonStyle: {
    fontSize: 22,
    margin: 20,
    marginLeft: 0,
    padding: '20px',
    minWidth: '20vw',
    borderRadius: 5,
    // boxShadow: '2px 2px 60px rgba(0, 0, 0, 0.5)',
  },
}

class BookForm extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div className="FAQ-wrapper">
        <div className="FAQ-main">
          <h1 style={{ color: 'black', textTransform: 'uppercase', fontSize: '40px' }}> FAQ </h1>
          <div className="questions-vikfix">
            <h2 style={{ textTransform: 'uppercase' }}>Questions about vikfix</h2>
            <SimpleExpansionPanel />
          </div>
        </div>
      </div>
    )
  }
}

export default BookForm
