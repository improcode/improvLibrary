import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteBook } from "../redux/actions/bookActions";

// handleSubmit = event => {
//   event.preventDefault();
//   this.props.editBook(this.state.book))
// }
// powyższe raczej w EditBook

const Book = props => {
  const linkToEdit = "/edit/" + props.bookInfo.id;
  const { book } = props;
  const handleClick = () => {
    props.deleteBook(book.id);
  };
  return (
    <>
      <tr>
        <td data-th="">{book.title}</td>
        <td data-th="">{book.author}</td>
        <td data-th="">
          <Link to={linkToEdit}>
            <button>Edit</button>
          </Link>
        </td>
        <td data-th="">
          <button onClick={handleClick}>Remove</button>
        </td>
      </tr>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books.find(book => book.id === ownProps.bookInfo.id)
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
