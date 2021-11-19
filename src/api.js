import axios from "axios";

const axiosPath = axios.create({
  baseURL: 'https://api.nytimes.com/svc/topstories/v2/'
})

const apiKey = '99c1kz1Hdxb6NxGZbFPVnpBba5b7XK9c'

export {apiKey,axiosPath}