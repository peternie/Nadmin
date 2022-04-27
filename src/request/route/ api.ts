import request from "../index";

let userRoute = (data :any)=>{
  return request({
    method:'post',
    data,
    url:'userRoute'
  })
}

export {
  userRoute
}