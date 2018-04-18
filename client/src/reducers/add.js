import {FETCHED_DETAILED_ADD} from '../actions/adds'

export default function (state = null, action) {
    switch (action.type) {
        case FETCHED_DETAILED_ADD:
            return action.payload

        default:
            return state
    }
}