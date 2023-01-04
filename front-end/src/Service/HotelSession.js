class hotelSession {
    isLoggedIn = () => {
      return localStorage.getItem("hotel") !== null;
    };
    getHotel = () => {
      return JSON.parse(localStorage.getItem("hotel"));
    };
    addHotel = (hotel) => {
      if (!this.isLoggedIn()) {
        localStorage.setItem("hotel", JSON.stringify(hotel));
      }
    };
    removeHotel() {
      if (this.isLoggedIn()) {
        localStorage.removeItem("hotel");
      }
    }
  }
  
  export default new hotelSession();
  