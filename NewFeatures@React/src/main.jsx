import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={"770037729806-h6km61hvb588heh15jsortc5n7eg0dea.apps.googleusercontent.co"}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
