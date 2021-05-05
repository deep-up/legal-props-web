import { CLEAR_ALERT, LOADING_FALSE, LOADING_TRUE, SET_ALERT, SET_ROUTE } from "./commonTypes";

export const setAlert = (alert) => ({
    type: SET_ALERT,
    payload: alert
});
export const clearAlert = () => ({
    type: CLEAR_ALERT
});
export const loadingTrue = () => ({
    type: LOADING_TRUE
});
export const loadingFalse = () => ({
    type: LOADING_FALSE
});
export const setRoute = (route) => ({
    type: SET_ROUTE,
    payload: route
});
