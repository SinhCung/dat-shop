import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Dress from './components/dat-shop/dress' ;
import Shirt from './components/dat-shop/shirt' ;
import Home from './components/dat-shop/home' ;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <App>
        <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/Dress'element={<Dress/>}/>
        <Route path='/Shirt'element={<Shirt/>}/>
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
