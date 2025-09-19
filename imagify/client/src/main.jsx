import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppContextProvider from './context/AppContext.jsx'
import App from './App.jsx'
import React from 'react';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <AppContextProvider>
            <App />
         </AppContextProvider>
    
  </BrowserRouter>
    
 
)
