import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";
import theme from "../../common/Theme";
import styles from "./styles"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "@material-ui/styles"
import TaskBoard from "../TaskBoard";
import { Provider } from "react-redux"
import configureStore from "../../redux/configureStore";
import GlobalLoading from "./../../components/GlobalLoading"
const store = configureStore();
class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <GlobalLoading />
          <TaskBoard />
        </ThemeProvider>
      </Provider>
    )
  }
}
export default withStyles(styles)(App)
