import React, {Component} from 'react';
import Styles from "./styles";
import { withStyles } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import { Fab, Icon } from "@material-ui/core";
import * as taskActions from "../../actions/tasks"
import {  bindActionCreators, compose } from "redux";
import { connect } from "react-redux"

class TaskItem extends Component {

  onHandleDelete = (id) => {
    const { taskActionCreators } = this.props
    const { deleteTask } = taskActionCreators
    // eslint-disable-next-line no-restricted-globals
    if ( confirm('Bạn có chắc chắn muốn xoá?')) {
      deleteTask(id)
    }
  }
  render() {
    const { classes, task, status, onHandleEdit } = this.props
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">
                {task.title}
              </Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            aria-label="Edit"
            className={classes.fab}
            size="small"
            onClick={() => onHandleEdit(task) }
          >
            <Icon fontSize="small">
              edit_icon
            </Icon>
          </Fab>
          <Fab
            color="secondary"
            aria-label="Delete"
            className={classes.fab}
            size="small"
            onClick={() => this.onHandleDelete(task.id)}
          >
            <Icon fontSize="small">
              delete_icon
            </Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  taskActionCreators : bindActionCreators(taskActions, dispatch)
})
const withConnect = connect(
  null,
  mapDispatchToProps
)

export default compose(withConnect,withStyles(Styles))(TaskItem);