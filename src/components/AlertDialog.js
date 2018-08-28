import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import Button from '../components/Button'

class AlertDialog extends React.Component {
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render () {
    return (
      <div>
        <Button title="SEND" type="tertiary" onClick={this.handleClickOpen}>
          SEND
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Thank you for contacting us!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              We will be in touch with you shortly.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button title="OK" type="primary" onClick={this.handleClose} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default AlertDialog
