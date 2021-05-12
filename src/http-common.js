import axios from 'axios';

const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PRODUCTION : process.env.REACT_APP_DEVELOPMENT;

export default axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json"
  }
});
