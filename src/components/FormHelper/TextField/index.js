import React from "react";
import {FormControl, TextField} from "@material-ui/core";
import PropTypes from "prop-types"
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const renderTextField = ({
 classes,
  label,
  input,
  meta:{ touched, invalid, error },
  ...custom
}) => (
  <FormControl className={classes.formControl}>
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  </FormControl>
)

renderTextField.propTypes = {
  label: PropTypes.string,
}
export default (withStyles(styles))(renderTextField)