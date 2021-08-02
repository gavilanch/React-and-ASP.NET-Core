import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // global
import App from './App';
import CSSExamples from './CSSExamples';
import reportWebVitals from './reportWebVitals';
import Simple from './Simple';

ReactDOM.render(
  <React.StrictMode>
    <>
    <CSSExamples />
    <Simple />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
