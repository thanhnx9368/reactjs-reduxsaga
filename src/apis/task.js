import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../const";

const taskUrl = 'tasks'
export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${taskUrl}`)
}