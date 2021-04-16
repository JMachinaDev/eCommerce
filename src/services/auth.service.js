// AUTHENTICATION SERVICE
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
    let userInStorage = localStorage.getItem('user');
    return JSON.parse(userInStorage);
  };
};

export default AuthService;
