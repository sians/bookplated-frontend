import * as actionTypes from './actionTypes'

export const getBooks = () => ({
  type: [
    actionTypes.GET_BOOKS,
    actionTypes.GET_BOOKS_SUCCESS,
    actionTypes.GET_BOOKS_FAIL,
  ]
})

export const getBook = (id) => ({
  type: [
    actionTypes.GET_BOOK,
    actionTypes.GET_BOOK_SUCCESS,
    actionTypes.GET_BOOK_FAIL,
  ]
})
