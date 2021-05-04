import { USER_FAILURE, USER_SUCCESS, SET_USER_ID } from "./UserTypes"

const initialState = {
    user: null,
    _id : null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_ID: return {
            ...state,
            _id: action.payload._id
        }
        case USER_SUCCESS: return {
            ...state,
            user: action.payload.user
        }
        case USER_FAILURE: return {
            ...state,
            user: null
        }
        default:
            return state
    }
}

export default AuthReducer;