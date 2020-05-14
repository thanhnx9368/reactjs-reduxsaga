import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../const";
import qs from "query-string"

const taskUrl = 'tasks'
export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${taskUrl}`)
}

export const addTask = (payload) => {
  return axiosService.post(`${API_ENDPOINT}/${taskUrl}`, payload)
}
export const deleteTask = id => {
  return axiosService.delete(`${API_ENDPOINT}/${taskUrl}/${id}`)
}
export const filterTask = params => {
  const paramSerlize = qs.stringify(params, { encode: true})
  return axiosService.get(`${API_ENDPOINT}/${taskUrl}?${paramSerlize}`)
}