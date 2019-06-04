import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import ReactGA from 'react-ga'
import Button2 from '../components/Button'

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
    ReactGA.pageview('/buynow_click')
    this.setState({ open: true })
  }

  handleClose = () => {
    ReactGA.pageview('/placeorder_click')
    this.setState({ open: false })
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
              product to maximize its performance. However, we have begun producing our first
              batches for you to order at a 30/50%-discount.
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
                href="https://forms.gle/mcxFSrTYr1t4FQkT7"
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
