import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core";
import theme from "../../common/Theme";
import styles from "./styles"
import { ThemeProvider } from "@material-ui/styles"
import TaskBoard from "../TaskBoard";

class App extends Component{
  render() {
    console.log(this.props, 'this.props')
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard />
      </ThemeProvider>
    )
  }
}
export default withStyles(styles)(App)
