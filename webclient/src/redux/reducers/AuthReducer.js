import { CLEAR_AUTH, SET_AUTH } from '../actions/AuthActions';
const initialState = {
    auth: {}
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                auth: action.auth
            }
        case CLEAR_AUTH:
            return {
                ...state,
                auth: null
            }
        default:
            return state
    }
}

export default AuthReducer;