import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'https://martinsromao.github.io/rmmoney/api'
    : 'http://localhost:3000/api'
})