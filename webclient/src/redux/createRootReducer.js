import { combineReducers } from 'redux'
import AuthReducer from './auth/AuthReducer'
import CommonReducer from './common/commonReducer';

export default  combineReducers({
    authReducer: AuthReducer,
    commonReducer: CommonReducer,
});
