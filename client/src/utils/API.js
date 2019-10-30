import axios from "axios";

export default {
  getBooks: function(query) {
    console.log("API.js " + query);
    return axios.get("/api/books", { params: { q: query } });
  },

  saveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  }
};
