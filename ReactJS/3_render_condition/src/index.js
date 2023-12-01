import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function generateJSX(){
  const emp={
    "name":"Dileep",
    "salary":29000
  }
  if(emp.salary>20000){
    return (
      <div>
        <span>{emp.name} is eligible for Loan as his salary is {emp.salary}</span>
      </div>
    )}
  else{
    return (
      <div>
        <span>{emp.name} is not eligible for Loan</span>
      </div>
    )
  }
}

function display(){
  return(
    <div>
      <h2>Employee Details</h2>
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
