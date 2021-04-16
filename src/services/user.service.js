// DATA SERVICE
import http from '../http-common';
import authHeader from './auth-header';

class UserService {
  getPublicContent() {
    return http.get('api/test/all');
  };

  getUserBoard() {
    return http.get('api/test/user', { headers: authHeader() });
  };

  getModeratorBoard() {
    return http.post('api/test/mod', { headers: authHeader() });
  };

  getAdminBoard() {
    return http.put('api/test/admin', { headers: authHeader() });
  };
}

export default UserService;

// we call axios get, post, put, delete method corresponding to HTTP request
// GET, POST, PUT, DELETE to make CRUD Operations
