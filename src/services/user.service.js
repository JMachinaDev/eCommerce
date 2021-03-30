import http from '../http-common';

class UserDataService {
  getAll() {
    return http.get('/users')
  }
  get(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post('/users', data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  //   delete(id) {
  //     return http.delete(`/tutorials/${id}`);
  //   }

  //   deleteAll() {
  //     return http.delete(`/tutorials`);
  //   }

  //   findByTitle(title) {
  //     return http.get(`/tutorials?title=${title}`);
  //   }
}

export default new UserDataService();

// we call axios get, post, put, delete method corresponding to HTTP request
// GET, POST, PUT, DELETE to make CRUD Operations
