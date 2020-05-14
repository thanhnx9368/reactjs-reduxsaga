import styles from "./styles";
import React, {Component, Fragment} from 'react';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from 'redux-form'
import {connect} from "react-redux";
import {compose, bindActionCreators} from "redux";
import handleSubmit from "redux-form/lib/handleSubmit";
import renderTextField from "../FormHelper";
import validate from "../../common/validate";
import * as taskActions from "../../actions/tasks"

class ModalContent extends Component {
  handleSubmitForm = data => {
    const { taskActionCreators } = this.props
    const { addTask } = taskActionCreators
    const { title, description } = data
    addTask({
      title,
      description,
      status: 0
    })
  }
  render() {
    const { handleSubmit, invalid, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <Field
            id="title"
            name="title"
            label="Tiêu đề"
            margin="normal"
            rowsMax="5"
            component={renderTextField}
          >
          </Field>
          <Field
            id="description"
            name="description"
            margin="normal"
            label="Mô tả"
            rowsMax="5"
            component={renderTextField}
          >
          </Field>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.onClose}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            color="primary"
            type="submit"
            disabled={invalid || submitting}
          >
            Save
          </Button>
        </DialogActions>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  initialValues: state.tasks.taskEditting
})
const mapDispatchToProps = dispatch => ({
  taskActionCreators: bindActionCreators(taskActions, dispatch)
})
const FORM_NAME = "TASK_FORM"
const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate
})

export default compose(withConnect, withReduxForm)(ModalContent);