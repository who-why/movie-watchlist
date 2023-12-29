import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tailwindcss/tailwind.css';
import { MyProvider } from './componenets/Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <React.StrictMode>
   <MyProvider>
        <App />
   </MyProvider>
 
   </React.StrictMode>

);

reportWebVitals();
