import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

const enhancers = []

const composeEnhancers = composeWithDevTools({})

const composedEnhancers = composeEnhancers(
    ...enhancers
)

const initializeStore = (initialState = {}) => {
    return createStore(rootReducer, initialState, composedEnhancers)
}

export default initializeStore