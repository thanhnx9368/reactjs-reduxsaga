import React from "react";
import {FormControl, FormHelperText, Select, InputLabel} from "@material-ui/core";
import PropTypes from "prop-types"
import styles from "./styles"
import { withStyles } from "@material-ui/core/styles";
const renderFormHelper = ({ touched, error }) => {
  if ( !(touched && error) ) {
    return null
  }
  return <FormHelperText>{touched && error }</FormHelperText>
}
const renderSelectField = ({
     classes,
     label,
     input,
     meta:{ touched, invalid, error },
     children,
     ...custom
   }) => (
     <FormControl error={touched && error} className={classes.formControl}>
       <InputLabel>{label}</InputLabel>
       <Select
         label={label}
         placeholder={label}
         error={touched && invalid}
         {...input}
         {...custom}
         inputProps={{
           name: 'age',
           id: '123 '
         }}
         value={input.value}
       >
         {children}
       </Select>
       {renderFormHelper({touched, error})}
     </FormControl>
)

renderSelectField.propTypes = {
  label: PropTypes.string,
}
export default withStyles(styles)(renderSelectField)