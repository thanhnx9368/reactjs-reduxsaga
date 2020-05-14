import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../const";

const taskUrl = 'tasks'
export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${taskUrl}`)
}

export const addTask = (payload) => {
  console.log('123 123')
  return axiosService.post(`${API_ENDPOINT}/${taskUrl}`, payload)
}