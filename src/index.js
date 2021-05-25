/*
 * @Description: `
 * @Version: 1.0
 * @Autor: 杨永强
 * @Date: 2021-05-14 15:17:25
 * @LastEditors: 杨永强
 * @LastEditTime: 2021-05-25 11:48:45
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Sum from "./component/case1/Sum"
// import Biaoge from "./component/case2/biaoge"
// import ShoppingCart from "./component/case3/shoppingCart"
import Calculator  from "./component/event/event"

ReactDOM.render(
  <React.StrictMode>
    {/* <Sum /> */}
    {/* <Biaoge /> */}
    {/* <ShoppingCart /> */}
    <Calculator  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
