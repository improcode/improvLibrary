export const deleteBook = (id) => {
    return {
        type: "DELETE_BOOK",
        id
    }
}

export const editBook = (book) => {
    return {
        type: "EDIT_BOOK",
        book
    }
}

export const fetchBooks = (books) => {
    return {
        type: "FETCH_BOOKS",
        books
    }
}