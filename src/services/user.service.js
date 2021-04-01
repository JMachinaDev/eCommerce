import http from '../http-common';
import authHeader from './auth-header';

class UserService {
  getPublicContent() {
    return http.get(API_URL + 'all');
  };

  getUserBoard() {
    return http.get(API_URL + 'user', { headers: authHeader() });
  };

  getModeratorBoard() {
    return http.post(API_URL + 'mod', { headers: authHeader() });
  };

  getAdminBoard() {
    return http.put(API_URL + 'admin', { headers: authHeader() });
  };
}

export default new UserService();

// we call axios get, post, put, delete method corresponding to HTTP request
// GET, POST, PUT, DELETE to make CRUD Operations
