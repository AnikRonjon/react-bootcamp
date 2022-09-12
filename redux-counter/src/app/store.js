import {createStore, applyMiddleware, combineReducers} from 'redux'
import CounterReducer from '../features/counter/counterReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { useReducer } from 'react'
import { APIReducer } from '../features/apiFetching/APIReducer'
const middleware = [thunk]

const RootReducer = combineReducers({
  userList: APIReducer,
  couner: CounterReducer
})
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)
export default store;