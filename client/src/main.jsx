import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Css/navbar.css"
import "./Css/style.css"
import "./Css/dashborad.css"
import "./Css/resetpassword.css"
import "./Css/withdraw.css"
import "./Css/animation.css"
import "./Css/profileCard.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
