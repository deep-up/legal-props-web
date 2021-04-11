export const SET_AUTH = "SET_AUTH";
export const CLEAR_AUTH = "CLEAR_AUTH";

export const setAuth = (data) => ({
    type: SET_AUTH,
    data,
});

export const clearAuth = () => ({
    type: CLEAR_AUTH
});
