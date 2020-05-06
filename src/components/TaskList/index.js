import React, {Component} from 'react';
import Styles from "./styles";
import { withStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TaskItem from "../TaskItem";

class TaskList extends Component {
  render() {
    const { classes, task, status } = this.props
    return (
      <Grid item md={4} xs={12} key={status.id}>
        <div className={classes.status}> {status.label} </div>
        <Box mt={2} mb={2}>
          <div className={classes.wrapperListTask}>
            { task.map((taskFilter, taskFilterIndex) => {
              return (
                <TaskItem task={taskFilter} status={status} key={taskFilterIndex}/>
              )
            }) }
          </div>
        </Box>
      </Grid>
    );
  }
}

export default withStyles(Styles)(TaskList);