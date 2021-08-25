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
import renderTextField from "../FormHelper/TextField";
import validate from "../../common/validate";
import * as taskActions from "../../actions/tasks"
import * as modalActions from "../../actions/modal"
import {withStyles} from "@material-ui/core/styles";
import renderSelectField from "../FormHelper/SelectField";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

class ModalContent extends Component {

  renderStatusSelect() {
    let xhtml = null
    const { taskEditting } = this.props
    if ( taskEditting && taskEditting.id ) {
      xhtml = (
        <Field
          id="status"
          name="status"
          label="Trạng thái"
          component={renderSelectField}
        >
          <MenuItem value={0}>Ready</MenuItem>
          <MenuItem value={1}>Inprogress</MenuItem>
          <MenuItem value={2}>Done</MenuItem>
        </Field>
      )
    }
    return xhtml
  }

  handleSubmitForm = data => {
    const { taskActionCreators } = this.props
    const { addTask, updateTask } = taskActionCreators
    const { title, description, id, status } = data
    if (!id && id !== 0 ) {
      addTask({
        title,
        description,
        status: 0
      })
    } else {
      updateTask({
        id,
        title,
        description,
        status
      })

    }

  }
  render() {
    const { classes, handleSubmit, invalid, submitting, modalActionCreators, initialValues } = this.props
    const { hideModal } = modalActionCreators
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
            className={classes.baseInput}
          >
          </Field>
          <Field
            id="description"
            name="description"
            margin="normal"
            label="Mô tả"
            rowsMax="5"
            component={renderTextField}
            className={classes.baseInput}
          >
          </Field>
          {this.renderStatusSelect()}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={hideModal}
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
  initialValues: state.tasks.taskEditting,
  taskEditting: state.tasks.taskEditting
})
const mapDispatchToProps = dispatch => ({
  taskActionCreators: bindActionCreators(taskActions, dispatch),
  modalActionCreators: bindActionCreators(modalActions, dispatch)
})
const FORM_NAME = "TASK_FORM"
const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate
})

export default compose(withConnect, withReduxForm, withStyles(styles))(ModalContent);