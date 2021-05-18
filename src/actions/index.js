import * as actionTypes from '../constants/index'
import * as api from '../api/index'

export function getQuestions() {
    return dispatch => {
          console.log("in actions");
          
          api.getQuestions()
                .then(data => {
                      dispatch({ type: actionTypes.GETQUESTIONS_SUCCESS, data });
                     
                })
                .catch(e => {
                      return dispatch({ type: actionTypes.GETQUESTIONS_FAILED, message: e.message })
                    //   console.log(e.message)
                })
    }
}