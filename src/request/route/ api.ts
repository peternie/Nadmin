import request from "../index";

let userRoute = ()=>{
  return request({
    method:'get',
    // data,
    url:'userRoute'
  })
}

export {
  userRoute
}