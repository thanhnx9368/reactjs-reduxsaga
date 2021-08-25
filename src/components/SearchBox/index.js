import React, {Component} from 'react';
import styles from "./styles";
import {withStyles} from "@material-ui/core/styles";
import { connect } from "react-redux"
import TextField from "@material-ui/core/TextField/TextField";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/tasks"
import {compose} from "redux";
class SearchBox extends Component {
  onSearch = (e) => {
    let { taskActionsCreators } = this.props
    let { filterTask } = taskActionsCreators
    let target = e.target
    let value = target.value
    filterTask(value)
  }
  render() {
    let { classes } = this.props

    return (
      <div>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            className={classes.formField}
            id="standard-basic"
            label="Standard"
            name="txtKeyword"
            onChange={this.onSearch}
            placeholder="Tìm kiếm"
          />
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props ) => {
  return {
    taskActionsCreators: bindActionCreators(taskActions, dispatch)
  }
}
const withConnet = connect(
  null,
  mapDispatchToProps
)

export default compose(withConnet, withStyles(styles))(SearchBox);