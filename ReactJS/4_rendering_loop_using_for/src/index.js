import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function generateJSX(){
  var jsxarr=[];
  const empdata = [
    {"name":"Dileep","age":27,"state":"Odisha"},
    {"name":"Vrinda","age":23,"state":"Maharashtra"},
    {"name":"Priya","age":24,"state":"Jharkhand"}
  ]
  for(let i=0;i<empdata.length;i++)
  {
    jsxarr.push(
      <div>
        <div>Employee Name:{empdata[i].name}</div>
        <div>Employee Name:{empdata[i].age}</div>
        <div>Employee Name:{empdata[i].state}</div><br/>
      </div>
    )
  }
  return jsxarr;
}

function display(){
  return (
    <div>
      <h3>Employee Details</h3>
      {generateJSX()}
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
