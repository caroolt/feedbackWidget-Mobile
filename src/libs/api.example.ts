import axios from 'axios';

export const api = axios.create({
  baseURL:'local onde ta sendo rodado o server'
})