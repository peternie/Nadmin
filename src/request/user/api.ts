// import {request} from '../index'
import request from '../index'
let userLogin = (data: any)=>{
  return request({
    method:'post',
    url:'/getUser',
    data
  })
}

export {
  userLogin
}