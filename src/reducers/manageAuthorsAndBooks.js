import { combineReducers } from "redux"; //combineReducers import
import uuid from "uuid";

// BOOKS REDUCER
const booksReducer = (state = [], action) => {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];

    case "REMOVE_BOOK":
      idx = state.findIndex(book => book.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    default:
      return state;
  }
};

// AUTHOR REDUCER
const authorReducer = (state = [], action) => {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];

    case "REMOVE_AUTHOR":
      idx = state.findIndex(author => author.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case "ADD-BOOK":
      debugger
      let existingAuthor = state.filter(
        author => author.authorName === action.book.authorName
      );
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid() }];
      }
    default:
      return state;
  }
};
// combineReducers set-up with the individual reducers being added to the rootReducer object
const rootReducer = combineReducers({
  authors: authorReducer,
  books: booksReducer
});

export default rootReducer; // exporting the package
