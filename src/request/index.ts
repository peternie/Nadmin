import axios from 'axios'
// import { UserInfo } from 'os'

const request = axios.create({
  baseURL:'/mock',
})
interface UserInfo {
  userName :string
  password :string
}
let login = (data: UserInfo)=>{
  return request({
    method:'post',
    url:'/getUser',
    data
  })
}
export {
  login
}