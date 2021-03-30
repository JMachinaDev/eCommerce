import http from '../http-common';

class HeartbeatService {
  ping() {
    return http.get('/');
  };

};

export default HeartbeatService;
