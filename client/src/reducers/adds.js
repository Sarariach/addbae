import {FETCHED_ALL_ADDS} from '../actions/adds'

export default function (state = [], action) {
    switch (action.type) {
        case FETCHED_ALL_ADDS:
            return action.payload
        default:
            return state
    }
}