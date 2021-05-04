import { combineReducers } from 'redux'
import AuthReducer from './auth/AuthReducer'
import UserReducer from './user/UserReducer'
import CommonReducer from './common/commonReducer';

export default  combineReducers({
    authReducer: AuthReducer,
    userReducer: UserReducer,
    commonReducer: CommonReducer,
});
