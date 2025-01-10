import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes.jsx'
import './css/reset.css'
import './css/variables.css'
import './css/fonts.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
