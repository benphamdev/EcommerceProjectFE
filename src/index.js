import React from 'react';
import ReactDOM from 'react-dom/client';
import './main/styles/index.css';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./main/Main";
import reportWebVitals from './main/reportWebVitals';
import { store } from "./main/shared/redux/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
