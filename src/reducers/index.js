import addColor from './updateColor'
import addTags from './updateTags'
import { combineReducers } from 'redux'

// const combined = (state = {}, action) => {
//     return {
//         a: addColor(state.a, action),
//         b: addTags(state.b, action)
//     }
// }

const combined = combineReducers({
    a: addColor,
    b: addTags
})
export default combined