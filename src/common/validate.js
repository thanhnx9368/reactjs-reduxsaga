const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = "Vui lòng nhập ký tự!"
  } else if (values.title.length < 6) {
    errors.title = "Vui lòng nhập trên 6 ký tự!"
  }
  return errors
}
export default validate