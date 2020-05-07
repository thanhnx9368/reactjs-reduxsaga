import React, {Component, Fragment} from 'react';
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux"
import { compose } from "redux";
import iconLoading from "./../../assets/images/gif/loading-1.gif"

class GlobalLoading extends Component {
  renderComponentLoading = () => {
    let { isLoading, classes } = this.props
    let xHtml = null
    if ( isLoading ) {
      return (
        <div className={classes.loadingWrapper}>
          <img src={iconLoading} alt="loading" className={classes.icon}/>
        </div>
      )
    }
    return xHtml
  }
  render() {
    return (
      <Fragment>
        {this.renderComponentLoading()}
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: state.uiReducer.isLoading
})
const withConnect = connect(
  mapStateToProps, null
)

export default compose(
  withStyles(styles),
  withConnect
)(GlobalLoading)