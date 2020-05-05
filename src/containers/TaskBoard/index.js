import React, {Component} from 'react';
import { withStyles } from "@material-ui/core";
import styles from "./styles"
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add"
import Grid from "@material-ui/core/Grid";
import {STATUSES} from "./../../const/index"
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
	renderBoard() {
		const { classes } = this.props
		let xhtml = null
		xhtml = (
			<Grid container spacing={2}>
				{STATUSES.map((status, index) => {
					let listTaskFiltered = listTask.filter((task) => status.status == task.status)
					return (
						<Gird item md={4} xs={12} key={status.id}>
							<div className={classes.status}> {status.label} </div>
							<div className={classes.wrapperListTask}>
								{ listTaskFiltered.map((taskFilter, taskFilterIndex) => {
										return (
											<div key={taskFilterIndex}>
												{taskFilter.title}
											</div>
										)
								}) }
							</div>
						</Gird>
					)
				})}
			</Grid>
		)
		return xhtml
	}
	render() {
		return (
			<div>
				<Button variant="contained" color="primary">
					<Add /> Thêm danh sách công việc
				</Button>
				{this.renderBoard()}
			</div>
		);
	}
}

export default withStyles(styles)(TaskBoard);