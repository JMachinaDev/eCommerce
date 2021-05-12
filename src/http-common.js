import axios from 'axios';

const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_DEV : process.env.REACT_APP_DEV;

export default axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json"
  }
});
