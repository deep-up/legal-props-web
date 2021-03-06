import { CLEAR_ALERT, LOADING_FALSE, LOADING_TRUE, SET_ALERT, SET_ROUTE, TOGGLE_DRAWER } from "./commonTypes";

const initialState = {
    loading: false,
    route: "/",
    drawerOpen: true,
    alert: {
        show: false,
        typeinput: "",
        titleToShow: "",
        textToShow: "",
        timeout: 0
    },
}

const CommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_TRUE:
            return {
                ...state,
                loading: true
            }
        case LOADING_FALSE:
            return {
                ...state,
                loading: true
            }

        case SET_ALERT:
            return {
                ...state,
                loading: false,
                alert: {
                    show: true,
                    typeinput: action.payload.typeinput,
                    titleToShow: action.payload.titleToShow,
                    textToShow: action.payload.textToShow,
                    timeout: action.payload.timeout
                },

            }
        case CLEAR_ALERT:
            return {
                ...state,
                loading: false,
                alert: {
                    show: false,
                    typeinput: "",
                    titleToShow: "",
                    textToShow: "",
                    timeout: 0
                },
            }
        case SET_ROUTE:
            return {
                ...state,
                route: action.payload
            }
        case TOGGLE_DRAWER:
            return {
                ...state,
                drawerOpen: !state.drawerOpen
            }

        default:
            return state
    }
}

export default CommonReducer;