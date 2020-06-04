export default function(Vue) {
  Vue.auth = {
    // set token
    setToken(token, expiration, role) {
      localStorage.setItem("token", token);
      localStorage.setItem("expiration", expiration);
      localStorage.setItem("role", role);
    },
    // get token
    getToken() {
      const token = localStorage.getItem("token");
      const expiration = localStorage.getItem("expiration");
      const role = localStorage.getItem("role");
      if (!token || !expiration || !role) return null;
      if (Date.now() > parseInt(expiration, 10)) {
        this.destroyToken();
        return null;
      }
      return token;
    },
    // destroy token
    destroyToken() {
      localStorage.removeItem("token");
      localStorage.removeItem("expiration");
      localStorage.removeItem("role");
    },
    // isAutheticated
    isAutheticated() {
      if (this.getToken()) return true;
      return false;
    }
  };

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => Vue.auth
    }
  });
}
