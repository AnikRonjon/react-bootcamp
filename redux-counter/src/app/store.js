import {createStore} from 'redux'
import CounterReducer from '../features/counter/counterReducer'


const store = createStore(CounterReducer)
export default store;