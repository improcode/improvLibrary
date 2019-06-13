import { fetchBooks } from "../redux/actions/bookActions";
import axios from "axios";

const apiUrl = "";

export const fetchAllBooks = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        console.log(response);
        dispatch(fetchPosts(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
