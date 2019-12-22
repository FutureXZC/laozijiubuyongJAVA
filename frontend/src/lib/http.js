import axios from 'axios'

const http = axios.create({
  baseURL: 'https://563ca27c-adb5-46ab-8799-90be2c9cd2f7.mock.pstmn.io/',
});

// https://github.com/axios/axios#interceptors
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default http
