import React, {Component} from 'react';
import { withStyles } from "@material-ui/core";
import styles from "./styles"
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add"
import Grid from "@material-ui/core/Grid";
import {STATUSES} from "./../../const/index"

import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import * as taskActions from "./../../actions/tasks"
import * as modalActions from "../../actions/modal"
import { MODAL_TITLE_ADD } from "../../const/modal";

/*Components*/
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import SearchBox from "../../components/SearchBox"
import ModalContent from "../../components/Modal";

class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      open: false
    })
  }
  componentDidMount() {
    const { taskActionCreators } = this.props
		const { fetchListTask } = taskActionCreators
		fetchListTask()
  }

  openForm = () => {
    const { modalActionCreators } = this.props
    const { showModal, changeModalTitle, changeModalContent } = modalActionCreators
    showModal()
    changeModalTitle(MODAL_TITLE_ADD)
    changeModalContent(<ModalContent/>)
  }
	renderBoard() {
		const { classes, tasks } = this.props
    let xhtml
		xhtml = (
			<Grid container spacing={2}>
				{STATUSES.map((status, index) => {
					let listTaskFiltered = tasks.filter((task) => status.status === task.status)
					return (
						<TaskList task={listTaskFiltered} status={status} key={status.id}/>
					)
				})}
			</Grid>
		)
		return xhtml
	}
	render() {

		return (
			<div>
				<Button variant="contained" color="primary"
          onClick={this.openForm}
        >
					<Add /> Thêm danh sách công việc
				</Button>
				<SearchBox />
				{this.renderBoard()}
				<TaskForm />
			</div>
		);
	}
}
const mapStateToProps = state => {
  return {
    tasks: state.tasks.listTask
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));