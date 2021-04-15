// AUTHENTICATION SERVICE
import axios from 'axios';
import http from '../http-common';

class AuthService {
  login(username, password) {
    return http.post("api/auth/signin", {
      username,
      password
    })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  };

  logout() {
    localStorage.removeItem("user");
  };

  register(username, email, password) {
    return http.post("api/auth/signup", {
      username,
      email,
      password
    });
  };

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  };
};

export default AuthService;
