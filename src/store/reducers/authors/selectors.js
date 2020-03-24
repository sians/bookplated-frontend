import { createSelector } from "reselect";


export const getAuthor = (id) => createSelector(
  [state => state.authors.authors],
  authors => {
    let author = null
    authors.forEach(a => {
      if (a.id === id) return author = a;
    })
    return author
  }
);

export const getBookLoading = createSelector(
  [state => state.authors.authorsLoading],
  loading => loading
);

export const getBookError = createSelector(
  [state => state.authors.authorsError],
  error => error
);
