import axios from "axios"

export const axiosApi = axios.create({
  baseURL: "http://192.168.1.125:3000/v1"
})

axiosApi.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("access")}`
