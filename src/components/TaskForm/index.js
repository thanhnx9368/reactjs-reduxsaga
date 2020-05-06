import React, {Component} from 'react';
import Styles from "./styles";
import { withStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      open: false
    })
  }
  componentWillReceiveProps(nextProps, nextContext) {
    if ( nextProps && nextProps.open ) {
      console.log(nextProps, 'nextProps');
      this.setState({
        open: nextProps.open
      })
    }
  }

  onClose = () => {
    this.setState({
      open: false
    })
  }
  render() {
    let { open } = this.state
    const { classes } = this.props
    return (
      <div>
        <Dialog open={open} onClose={this.onClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Thêm Task công việc</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(Styles)(TaskForm);