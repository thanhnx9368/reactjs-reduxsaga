import React, {Component} from 'react';
import { withStyles } from "@material-ui/core";
import styles from "./styles"

class TaskBoard extends Component {
	render() {
		console.log(this.props, 'this.props')
		return (
			<div>
        <h1>Taskboard</h1>
			</div>
		);
	}
}

export default withStyles(styles)(TaskBoard);