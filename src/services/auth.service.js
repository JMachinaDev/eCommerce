// AUTHENTICATION SERVICE
import http from '../http-common';

class AuthService {
  async login(username, password) {
    const response = await http.post("api/auth/signin", {
      username,
      password
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
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
