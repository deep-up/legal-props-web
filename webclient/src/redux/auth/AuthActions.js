import { authCall } from '../../calls/AuthCalls';
import { encrypt } from '../../utils/crypt';
import { validateLoginForm } from '../../utils/validations';
import { loadingTrue, setAlert, clearAlert, setUserId, getUserData } from '../actions';
import { AUTH_SUCCESS, AUTH_FAILURE, LOGOUT } from './AuthTypes';

export const authSuccess = (token) => ({
  type: AUTH_SUCCESS,
  payload: {
    token
  }
});

export const authFailure = () => ({
  type: AUTH_FAILURE
});

export const logout = () => ({
  type: LOGOUT
});


export const logoutSession = () => {
  return (dispatch) => {
    dispatch(clearAlert());
    dispatch(logout());
  }

}

export const auth = (loginData) => {
  return (dispatch) => {
    var isOk = false;
    try {
       validateLoginForm(loginData.email, loginData.password);
      isOk = true;
    } catch (e) {
      dispatch(setAlert({ typeinput: "error", titleToShow: "login.auth.failTitle", textToShow: e.message, timeout: 0 }));
    }
    if (isOk) {
      dispatch(loadingTrue());
      const crypted = encrypt(loginData.password);
      authCall(loginData.email, crypted, (data) => {
        const auth = data.data.auth;
        //console.log({ authres: auth });
        if (auth.success) {
          dispatch(authSuccess(auth.token));
          dispatch(setUserId(auth._id));
          dispatch(setAlert({ typeinput: "success", titleToShow: auth.message, textToShow: auth.message, timeout: 1000 }));
          dispatch(getUserData(auth.token, {_id:auth._id}));
        } else {
          dispatch(authFailure());
          dispatch(setAlert({ typeinput: "error", titleToShow: auth.message, textToShow: auth.message, timeout: 0 }));
        }
      }, (data) => {
        const auth = data.auth;
        dispatch(setAlert({ typeinput: "error", titleToShow: "login.auth.failTitle", textToShow: auth.message, timeout: 0 }));
      });
    }
  }
}

