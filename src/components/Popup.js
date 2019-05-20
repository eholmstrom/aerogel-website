import React from 'react'
import Popup from 'reactjs-popup'
import Button from '../components/Button'

import '../styles/Popup.css'

const style = {
  buttonStyle: {
    fontSize: 22,
    margin: 20,
    marginLeft: 0,
    padding: '25px 25px 25px 25px',
    minWidth: '20vw',
    borderRadius: 5,
  },
  buttonStyleDialog: {
    fontSize: 18,
    margin: 16,
    marginLeft: 0,
    padding: 12,
    minWidth: '15vw',
    borderRadius: 5,
  },
}

export default () => (
  <Popup
    className="popup"
    trigger={<Button style={style.buttonStyle} title="Buy now" type="tertiary" />}
    modal
  >
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Earlybird </div>
        <div className="content">
          {' '}
          We are glad that you are interested in our products. We are currently developing the
          product to maximize its performance. However, we do have a first batch ready for you to
          order at a 30/50%-discount.
          <br />
          <br />
          Please place an order with the form by clicking the button below.
        </div>
        <div className="actions">
          <a href="https://docs.google.com/forms/d/1Shf8DZ1eD0Smzl3Fk0GfOINVUm7t_lj4wrIdBcRlmTg/prefill">
            BUY NOW
          </a>
        </div>
      </div>
    )}
  </Popup>
)
