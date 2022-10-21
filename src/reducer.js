import {
    ADD_ONE_TO_COUNTER,
    MINUS_ONE_FROM_COUNTER,
    CUSTOM_ADD_COUNTER,
} from './action'

const initialState = {
    counter: 0,
    name: 'Acciojob',
    age: 30,
    address: '1234 Main St'
}

function reducer(state = initialState, action){
    switch(action.type){
        case ADD_ONE_TO_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case MINUS_ONE_FROM_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CUSTOM_ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        default:
            return state
    }
}

export default reducer