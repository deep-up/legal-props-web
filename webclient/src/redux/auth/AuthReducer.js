
import { AUTH_FAILURE, AUTH_SUCCESS, LOGOUT } from "./AuthTypes";


const initialState = {
    token: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {

        case AUTH_SUCCESS: return {
            ...state,
            token: action.payload.token
        }
        case AUTH_FAILURE: return {
            ...state,
            token: null
        }
        case LOGOUT: return {
            ...state,
            token: null
        }
        

        default:
            return state
    }
}

export default AuthReducer;