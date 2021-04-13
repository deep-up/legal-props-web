import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
//import logger from "redux-logger";
import thunk from "redux-thunk";
import Reducers from "./createRootReducer";


const store = createStore(Reducers, /* preloadedState, */ composeWithDevTools(
    applyMiddleware(/*logger,*/ thunk),
)
);

export default store;






