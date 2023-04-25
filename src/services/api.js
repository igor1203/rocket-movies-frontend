import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-backend-zc95.onrender.com"
})