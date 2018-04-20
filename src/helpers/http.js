import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

export const gform = axios.create({
  baseURL: 'https://script.google.com',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  xsrfCookieName: '_csrf',
  withCredentials: false,
});

export default gform;
