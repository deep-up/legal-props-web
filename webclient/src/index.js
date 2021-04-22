import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./utils/routes";
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from "react-i18next";
import i18next from "./utils/i18next";
import './index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from "./redux/Store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={Store}>
        <I18nextProvider i18n={i18next}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </I18nextProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


if (module.hot) module.hot.accept();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
