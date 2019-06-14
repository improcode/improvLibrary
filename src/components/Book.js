import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteBook } from "../redux/actions/bookActions";

const Book = props => {
  const linkToEdit = "/edit/" + props.bookInfo.id;
  const { book } = props;
  const handleClick = () => {
    props.deleteBook(book.id);
  };

  return (
      <tr>
        <td data-th="Id">{book.id}</td>
        <td data-th="Title">{book.title}</td>
        <td data-th="Author">{book.author}</td>
        <td data-th="Edit">
          <Link to={linkToEdit}>
            <button className="edit-btn">Edit</button>
          </Link>
        </td>
        <td data-th="Remove">
          <button onClick={handleClick} className="remove-btn">Remove</button>
        </td>
      </tr>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books.find(book => book.id === ownProps.bookInfo.id) || state.books[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBook: id => {
      dispatch(deleteBook(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
