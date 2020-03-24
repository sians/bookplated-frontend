import * as actionTypes from './actionTypes'

export const getAuthor = (id) => ({
  type: [
    actionTypes.GET_AUTHOR,
    actionTypes.GET_AUTHOR_SUCCESS,
    actionTypes.GET_AUTHOR_FAIL,
  ]
})
