import { fetchBooks } from "../redux/actions/bookActions";
import axios from "axios";

const apiUrl = "http://localhost:4000/books/";

export const fetchAllBooks = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch(fetchBooks(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchEditBook = (props, updateFunction) => {
    axios
        .get("http://localhost:4000/books/" + props.match.params.id)
        .then(response => {
            updateFunction(response.data)
        })
        .catch(error => {
            throw error;
        });
}