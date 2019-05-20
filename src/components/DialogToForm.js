import React from 'react'
import Button from '@material-ui/core/Button'
import Button2 from '../components/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import ReactGA from 'react-ga'

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

function initializeReactGA () {
  ReactGA.initialize('UA-131151176-1')
}

class AlertDialog extends React.Component {
  state = {
    open: false,
  }

  componentWillMount () {
    initializeReactGA()
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
    ReactGA.pageview('/buy_click')
  }

  render () {
    return (
      <div style={{ display: 'inline-flex' }}>
        <Button2
          onClick={this.handleClickOpen}
          style={style.buttonStyle}
          title="Buy now"
          type="tertiary"
        />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Earlybird</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              We are glad that you are interested in our products. We are currently developing the
              product to maximize its performance. However, we do have a first batch ready for you
              to order at a 30/50%-discount.
              <br />
              <br />
              Please place an order with the form by clicking the button below.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              <a
                style={{
                  color: 'white',
                  fontSize: '18px',
                  padding: '15px',
                  backgroundColor: 'rgb(38, 150, 91)',
                }}
                href="https://docs.google.com/forms/d/1Shf8DZ1eD0Smzl3Fk0GfOINVUm7t_lj4wrIdBcRlmTg/prefill"
              >
                Place an order
              </a>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default AlertDialog
