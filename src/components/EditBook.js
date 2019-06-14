import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editBook } from "../redux/actions/bookActions";
import axios from "axios";

const linkstyles = {};

const EditBook = props => {
  const { book } = props;
  const [title, updateTitle] = useState("");
  const [author, updateAuthor] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/books/" + props.match.params.id)
      .then(response => {
        console.log(response);
        updateTitle(response.data.title);
        updateAuthor(response.data.author);
      })
      .catch(error => {
        throw error;
      });
  }, [props]);

  const handleSubmit = event => {
    event.preventDefault();
    book.title = title;
    book.author = author;
    props.editBook(book);
    props.history.push("/");
  };

  return (
    <>
      <div className="book-edit-field">
      <div className="edit-element">
        <Link style={linkstyles} to={"/"}>
          <button className="edit-btn">BACK</button>
        </Link>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="edit-element">
          <label>
            Title:  
            <input
              type="text"
              value={title}
              onChange={e => updateTitle(e.target.value)}
            />
          </label>
          </div>
          <div className="edit-element">
          <label>
            Author:  
            <input
              type="text"
              value={author}
              onChange={e => updateAuthor(e.target.value)}
            />
          </label>
          </div>
          <div className="edit-element">
          <button className="save-btn" type="submit">Save</button>
          </div>
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
