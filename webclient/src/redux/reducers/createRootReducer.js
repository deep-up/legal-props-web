import UsersReducer from './UsersReducers'
import AuthReducer from './AuthReducer'
import { combineReducers } from 'redux'

const reducer = () => combineReducers({
    users: UsersReducer,
    auth:AuthReducer
    
}
)

export default reducer