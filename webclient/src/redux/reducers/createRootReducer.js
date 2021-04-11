import UserReducer from './UserReducers'
import AuthReducer from './AuthReducer'
import { combineReducers } from 'redux'

const reducer = () => combineReducers({
    users: UserReducer,
    auth: AuthReducer

});

export default reducer;