import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/screen.css'
import { BrowserRouter } from 'react-router-dom'
import SubscriptionProvider from './context/SubscriptionProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SubscriptionProvider>
        <App />
      </SubscriptionProvider>
    </BrowserRouter>
  </React.StrictMode>
)
