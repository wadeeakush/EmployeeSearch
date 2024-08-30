import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EmployeeProvider } from './contexts/EmployeeContext';
import './styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </React.StrictMode>
);
