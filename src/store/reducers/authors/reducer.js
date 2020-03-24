import produce from 'immer'

import * as actionTypes from './actionTypes'


const initialState = {
  authors: [
    {
        id: "1",
        fullName: 'David Foster Wallace',
        birthYear: 1962,
        deathYear: 2008,
        born: "California, USA",
        bookIds: ["1", "2", "3"]
    }   
  ],
  authorsLoading: false,
  authorsError: null,
}

const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {

    case actionTypes.GET_AUTHOR:
        draft.authorsLoading = true
        break
        case actionTypes.GET_AUTHOR_SUCCESS:
        draft.authorsLoading = false
        draft.authors = action.result.data.map((d) => d.id)
        break
        case actionTypes.GET_AUTHOR_FAIL:
        draft.authorsLoading = false
        draft.authorsError = { status: action.error.status }
        break        

      default:
        break
    }
  })
}

export default reducer
