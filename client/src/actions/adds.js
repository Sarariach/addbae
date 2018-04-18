import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const FETCHED_DETAILED_ADD = 'FETCHED_DETAILED_ADD'
export const FETCHED_ALL_ADDS = 'FETCHED_ALL_ADDS'

export const fetchAdd = (AddId) => (dispatch) => {
  request
    .get(`${baseUrl}/adds/${AddId}`)
    .then(response => dispatch({
      type: FETCHED_DETAILED_ADD,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchAllAdds = () => (dispatch) => {
    request
    .get(`${baseUrl}/adds`)
    .then(response => dispatch({
        type:FETCHED_ALL_ADDS,
        payload: response.body.adds
    }))
    .catch(err=> alert(err))
  // ... implement!
  // Hint: make sure to use json.products and not json as payload,
  // because you send back an envelope! (so response.body.products)
}