export const findIndex = (id, list) => {
  let index = null
  index = list.findIndex(item => item.id == id)
  return index
}