import React from "react";
import { useState } from "react";
// import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editBook } from "../redux/actions/bookActions";

const linkstyles = {
  // textAlign: "left",
  // textDecoration: 'none',
  // background: '#f3f3f5',
};

const EditBook = props => {
  const { book } = props;

  const [title, updateTitle] = useState(book.title);
  const [author, updateAuthor] = useState(book.author);

  const handleSubmit = (event) => {
    event.preventDefault();
    book.title = title
    book.author = author
    props.editBook(book);
    props.history.push('/')
  };

  return (
    <>
      <div className="book-edit-field">
        <Link style={linkstyles} to={"/"}>
          <button>BACK</button>
        </Link>
        <form onSubmit={handleSubmit}>
        <label>
          Title:
        <input
          type="text"
          value={title}
          onChange={e => updateTitle(e.target.value)}
        />
        </label>
        <label>
          Author:
        <input
          type="text"
          value={author}
          onChange={e => updateAuthor(e.target.value)}
        />
        </label>
        <input type="submit" value="Save"/>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books.find(book => book.id === ownProps.match.params.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editBook: book => {
      dispatch(editBook(book));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBook);
