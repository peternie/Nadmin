import axios from 'axios'
// import { UserInfo } from 'os'

const request = axios.create({
  baseURL:'/mock',
})

request.interceptors.request.use(config=>{
  (config.headers as any).id= sessionStorage.getItem('token')
  return config
})
export default request