const initialState = {
    tags: []
}
const addTag = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_TAGS': return {
            ...state,
            tags: action.payload
        }
        // case 'UPDATE': return {
        //     ...state,
        //     ...action.payalod
        // }
        default: return state
    }
}

export default addTag;