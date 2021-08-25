import axios from "axios"
import qs from "query-string"
class axiosService {
  constructor() {
    const instance = axios.create();
    this.instance = instance
    instance.interceptors.request.use(this.handleSuccess, this.handleError)
  }
  handleSuccess = (response) => {
    return response
  }
  handleError = (error) => {
    return Promise.reject(error)
  }
  get = (url) => {
    return this.instance.get(url)
  }
  post = (url, body) => {
    return this.instance.post(url, body)
  }
  delete = (url, id) => {
    return this.instance.delete(url, id)
  }
  querySerialize = (url, config) => {
    const paramSerializer = (params) => {
      return qs.stringify(params)
    }
    return this.instance.get(url, {...config, paramSerializer})
  }
  put = (url, body) => {
    return this.instance.put(url, body)
  }
}
export default new axiosService();