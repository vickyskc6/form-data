import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import reportWebVitals from './reportWebVitals';

function RouterApp() {
  return (
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterApp/>
);
reportWebVitals();
