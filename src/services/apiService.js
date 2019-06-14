import { fetchBooks } from "../redux/actions/bookActions";
import axios from "axios";

const apiUrl = "http://localhost:4000/books/";

export const fetchAllBooks = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        console.log(response);
        dispatch(fetchBooks(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};