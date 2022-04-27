import axios from 'axios'
// import { UserInfo } from 'os'

const request = axios.create({
  baseURL:'/mock',
})
export default request