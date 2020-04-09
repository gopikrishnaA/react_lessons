const initialState = {
    color: 'green'
}
const addColor = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_COLOR': return { 
            ...state,
            color: 'red'
        }
        default: return state
    }
}

export default addColor;