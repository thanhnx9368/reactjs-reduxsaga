import axios from "axios"

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
}
export default new axiosService();