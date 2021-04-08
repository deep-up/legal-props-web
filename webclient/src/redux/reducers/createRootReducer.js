import formReducer from './formReducer'
import todosReducer from './todosReducer'
import usersReducer from './usersReducer'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const reducer = (history) => combineReducers({
    router: connectRouter(history),
    form: formReducer,
    todos: todosReducer,
    users: usersReducer
}
)

export default reducer