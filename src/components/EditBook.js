import React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {editBook} from "../redux/actions/bookActions";
import {fetchEditBook} from "../services/apiService";

const EditBook = props => {
    const {book} = props;
    const [currentBook, updateBook] = useState({title: '', author: ''});

    useEffect(() => {
        fetchEditBook(props, updateBook)
    }, [props]);

    const handleInputChange = event => {
        const {name, value} = event.target
        updateBook({...currentBook, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        book.title = currentBook.title;
        book.author = currentBook.author;
        props.editBook(book);
        props.history.push("/");
    };

    return (
        <>
            <div className="book-edit-field">
                <div className="edit-element">
                    <Link to={"/"}>
                        <button className="edit-btn">BACK</button>
                    </Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="edit-element">
                        <label>
                            Title:
                            <input
                                name='title'
                                type="text"
                                value={currentBook.title}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="edit-element">
                        <label>
                            Author:
                            <input
                                name='author'
                                type="text"
                                value={currentBook.author}
                                onChange={handleInputChange}
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
