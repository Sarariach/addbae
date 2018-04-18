import {FETCHED_ALL_ADDS, ADD_ADD} from '../actions/adds'

export default function (state = [], action) {
    switch (action.type) {
        case FETCHED_ALL_ADDS:
            return action.payload
        case ADD_ADD:
            return [...state, action.payload]
        default:
            return state
    }
}