class userSession {
  isLoggedIn = () => {
    return localStorage.getItem("user") !== null;
  };
  getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  addUser = (user) => {
    if (!this.isLoggedIn()) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  };
  removeUser() {
    if (this.isLoggedIn()) {
      localStorage.removeItem("user");
    }
  }
}

export default new userSession();
