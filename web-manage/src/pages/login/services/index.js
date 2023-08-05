import { request } from "@/utils/request"

export function checkLogin(data) {
  return request({
    url: "/mock/login.json",
    method: "POST",
    data
  })
}