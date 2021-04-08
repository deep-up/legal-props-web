import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./utils/routes";
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from "react-i18next";
import i18next from "./utils/i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
//import thunk from 'redux-thunk';
//import createHistory from 'history/createBrowserHistory';
//import { Provider } from 'react-redux';
//import {ConnectedRouter,routerMiddleware,} from 'react-router-redux';
//import { createStore, applyMiddleware } from 'redux';
//import reducer from './redux/store'
//import configureStore, { history } from './redux/store'
import { BrowserRouter } from 'react-router-dom';

//const store = configureStore(/* provide initial state if any */)

//const middleware = [thunk, routerMiddleware(history)]

/*const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);*/

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


if (module.hot) module.hot.accept();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
