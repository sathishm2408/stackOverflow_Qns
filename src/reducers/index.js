import * as actionTypes from '../constants/index'

const initialState = {
    cart: []
};

const getProductsReducer = (state = initialState, action) => {
    const { type, data } = action;

    switch (type) {
        case actionTypes.GETQUESTIONS_SUCCESS:
            console.log("GETQUESTIONS_SUCCESS in reducer", type,data)
            return {
                ...state,
                questions: data,
                apiError: false
            }
        case actionTypes.GETQUESTIONS_FAILED:
            console.log("GETQUESTIONS_FAILED in reducer", type,data)
            return {
                ...state,
                apiError: true
            }
        default:
            return state
    }
}
export default getProductsReducer;