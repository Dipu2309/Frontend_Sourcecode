import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import dileep from './dileep.jpg';
import chitti from './chitti.jpg';

const emp1={
  "id":1172560,
  "name":"Dileep",
  "age":27,
  "salary":29000
};

const emp2={
  "id":1172561,
  "name":"Vrinda",
  "age":23,
  "salary":29000
};

function getEmployeeDetail()
{
  const element=(
    <div>
      <h3>Employee Details</h3>
      <ol>
        <li>
          <div>
            <span>Name: {emp1.name}</span><br/>
            <span>ID: {emp1.id}</span><br/>
            <span>Age: {emp1.age}</span><br/>
            <span>Salary: {emp1.salary}</span><br/>
            <img alt="Employee Dileep" src={dileep} width="100px"/><br/>
            <a href="#">Edit Details</a>
          </div>
        </li>
        <li>
          <div>
            <span>Name: {emp2.name}</span><br/>
            <span>ID: {emp2.id}</span><br/>
            <span>Age: {emp2.age}</span><br/>
            <span>Salary: {emp2.salary}</span><br/>
            <img alt="Employee Vrinda" src={chitti} width="100px"/><br/>
            <a href="#">Edit Details</a>
          </div>
        </li>
      </ol>
    </div>
  )
  return element;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 getEmployeeDetail()
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
