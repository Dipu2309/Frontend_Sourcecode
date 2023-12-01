import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function display() {
    return (
      <div className="styling">
        <span style={{ fontWeight: "bold", fontSize: "25px" }}>Welcome to React App</span><br />
        <button className="button1 button2">Demo button</button>
      </div>
    )
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  display()
);
