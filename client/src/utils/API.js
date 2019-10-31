import axios from "axios";

export default {
  getBooks: function(query) {
    return axios.get("/api/books", { params: { q: query } });
  },

  getSavedBooks: function() {
    return axios.get("/api/books/saved");
  },

  saveBook: function(bookData) {
    console.log("Inside API.js first");
    console.log(bookData);
    return axios.post("/api/books", bookData);
  }
};
