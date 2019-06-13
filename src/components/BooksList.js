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
    <div>Actually, no books in library</div>
  );
  return (
    <>
      <div className="books-table">
        <table>
          <thead>
            <tr>
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
