import React, {Component} from 'react';
import { withStyles } from "@material-ui/core";
import styles from "./styles"
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add"
import Grid from "@material-ui/core/Grid";
import {STATUSES} from "./../../const/index"
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import * as taskActions from "./../../actions/tasks"
import { task } from "./../../reducers"

const listTask = [
	{
		id: 0,
		title: "PHP",
		description: "Hoc PHP",
		status: 0
	},
	{
		id: 1,
		title: "Javascript",
		description: "Hoc Javascript",
		status: 1
	},
	{
		id: 2,
		title: "Angular",
		description: "Hoc Angular",
		status: 2
	},
]


class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      open: false
    })
  }
  componentDidMount() {
    const { taskActionCreators } = this.props
    const { fetchListTaskRequest } = taskActionCreators
    fetchListTaskRequest()
  }

  openForm = () => {
    this.setState({
      open: true
    })
  }
	renderBoard() {
		const { classes, tasks } = this.props
    let xhtml = null
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
    let { open } =  this.state
		return (
			<div>
				<Button variant="contained" color="primary"
          onClick={this.openForm}
        >
					<Add /> Thêm danh sách công việc
				</Button>
				{this.renderBoard()}
				<TaskForm
          open={open}
        />
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
    taskActionCreators: bindActionCreators(taskActions, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));