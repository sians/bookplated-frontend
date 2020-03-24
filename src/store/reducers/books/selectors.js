import { createSelector } from "reselect";

// BOOKS
export const getBooks = createSelector(
  [state => state.books.books],
  books => books
);

export const getBooksLoading = createSelector(
  [state => state.books.booksLoading],
  loading => loading
);

export const getBooksError = createSelector(
  [state => state.books.booksError],
  error => error
);

// AUTHORS BOOKS
export const getAuthorsBooks = (bookIds) => createSelector(
  [state => state.books.books],
  books => bookIds.map(id => books[id])
);

// BOOK
export const getBook = (id) => createSelector(
  [state => state.books.books],
  books => books[id.id]
);

export const getBookLoading = createSelector(
  [state => state.books.booksLoading],
  loading => loading
);

export const getBookError = createSelector(
  [state => state.books.booksError],
  error => error
);
