import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function message()
{
  console.log("You have Successfully registered")
  alert("You have Successfully registered")
}

function display()
{
  return (
    <div>
      <label>Clicl here to register:</label>
      <input type="button" value="Register" onClick={message}/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  display()
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
