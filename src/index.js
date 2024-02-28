import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import RootContext from './context/RootContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RootContext>
    <Router>
    <App />
    </Router></RootContext>
);


reportWebVitals();
