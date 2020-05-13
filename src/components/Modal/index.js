import styles from "./styles";
import React, {Component, Fragment} from 'react';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from 'redux-form'
import {connect} from "react-redux";
import {compose} from "redux";
import handleSubmit from "redux-form/lib/handleSubmit";

class ModalContent extends Component {
  handleSubmitForm = data => {
    console.log(data, 'data')
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
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
          <Field
          name="title"
          component="input"
          type="input"
          >

          </Field>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Save
          </Button>
        </DialogActions>
      </form>
    );
  }
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({

})
const FORM_NAME = "TASK_FORM"
const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReduxForm = reduxForm({
  form: FORM_NAME
})

export default compose(withConnect, withReduxForm)(ModalContent);