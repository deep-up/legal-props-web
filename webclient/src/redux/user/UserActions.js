import { getUserDataCall } from '../../calls/UserCalls';
import { loadingTrue, setAlert } from '../actions';
import { SET_USER_ID, USER_FAILURE, USER_SUCCESS } from './UserTypes';

export const setUserId = (_id) => ({
    type: SET_USER_ID,
    payload: {
        _id
    }
});

export const userSuccess = (user) => ({
    type: USER_SUCCESS,
    payload: {
        user
    }
});

export const userFailure = () => ({
    type: USER_FAILURE
});

export const getUserData = (token, userInputData) => {
    return (dispatch) => {
        dispatch(loadingTrue());
        getUserDataCall(token, userInputData, (data) => {
            const userData = data;
            //console.log({ userData });
            if (userData.success) {
                dispatch(userSuccess(userData.user));
            } else {
                dispatch(userFailure());
                dispatch(setAlert({ typeinput: "error", titleToShow: userData.message, textToShow: userData.message, timeout: 0 }));
            }
        }, (data) => {
            dispatch(setAlert({ typeinput: "error", titleToShow: "login.auth.failTitle", textToShow: data.message, timeout: 0 }));
        });
    }
}

