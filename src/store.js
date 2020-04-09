import {createStore} from 'redux'
import reducer from './reducers'
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store.getState())


// store.dispatch({
//     type: 'UPDATE_COLOR'
// })

// console.log(store.getState())

export default store
