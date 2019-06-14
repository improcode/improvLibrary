const initState = {
  books: [{id:0, title: 'Actually, no books in library.', author: 'librarian'}]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_BOOK") {
    let newBooksList = state.books.filter(book => {
      return action.id !== book.id;
    });
    return {
      //   ...state, <--- when in state is more properties
      books: newBooksList
    };
  } else if (action.type === "EDIT_BOOK") {
    let newBooksList = state.books.map(item => {
      if (item.id === action.id) {
        console.log("action: " + action);
        return {
          ...item,
          title: action.title
        };
      }
      return item;
    });
    return { books: newBooksList };
  } else if (action.type === "FETCH_BOOKS") {
    return { books: action.books };
  }
  return state;
};

export default rootReducer;
