import React from "react";
import Book from "./Book";
import { connect } from "react-redux";

const BooksList = props => {
  const { books } = props;
  const bookList = books.length ? (
    books.map(book => {
      return <Book key={book.id} bookInfo={book} />;
    })
  ) : (
    <tr>
    <td data-th="Id">0</td>
    <td data-th="Title">Actually, no books in library.</td>
    <td data-th="Author">librarian</td>
    <td data-th="Edit"></td>
    <td data-th="Remove"></td>
  </tr>
  );
  return (
    <>
      <div className="books-table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Book Title</th>
              <th>Author</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>{bookList}</tbody>
        </table>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(mapStateToProps)(BooksList);
