import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterComponent from './Components/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main/> */}
    {/* <HomePage /> */}
   <RouterComponent />
  </React.StrictMode>
);
reportWebVitals();
