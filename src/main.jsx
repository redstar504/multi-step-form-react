import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/screen.css'
import { HashRouter } from 'react-router-dom'
import SubscriptionProvider from './context/SubscriptionProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <SubscriptionProvider>
      <App />
    </SubscriptionProvider>
  </HashRouter>
)
