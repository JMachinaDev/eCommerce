import axios from 'axios';

const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PRODUCTION : process.env.REACT_APP_DEVELOPMENT;

export default axios.create({
  baseURL: 'http://54.91.248.172:8081/',
  headers: {
    "Content-type": "application/json"
  }
});
