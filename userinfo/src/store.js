import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Reducer } from './Redux/reducer'

const store = createStore(Reducer, applyMiddleware(thunk))

export default store
