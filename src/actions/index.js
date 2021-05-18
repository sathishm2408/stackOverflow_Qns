import * as actionTypes from '../constants/index'
import * as api from '../api/index'

export function getQuestions() {
    return dispatch => {
          api.getQuestions()
                .then(data => {
                      dispatch({ type: actionTypes.GETQUESTIONS_SUCCESS, data });
                      // dispatch({type:actionTypes.SEARCH_CART})
                })
                .catch(e => {
                      return dispatch({ type: actionTypes.GETQUESTIONS_FAILED, message: e.message })
                    //   console.log(e.message)
                })
    }
}